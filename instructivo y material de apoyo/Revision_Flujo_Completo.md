# Revisión del Flujo Completo de las Consultas

Este documento presenta una revisión completa del flujo de trabajo desde la solicitud HTTP hasta la respuesta JSON para cada tipo de consulta implementada.

---

## Arquitectura General del Flujo

```
Cliente (PowerShell/Browser)
    ↓ HTTP Request
Controller (Recibe y valida)
    ↓ Llama al método
Service (Lógica de negocio)
    ↓ Consulta
DataService (Prisma Client)
    ↓ SQL generado
PostgreSQL Database
    ↓ Resultados
Service → Controller → Cliente
```

---

## PARTE 1: Flujo de Consultas Derivadas

### Ejemplo: Estudiantes Activos con Carrera

#### 1️⃣ Cliente hace la solicitud
```powershell
Invoke-RestMethod -Method Get -Uri "http://localhost:3000/academic/students/status/active"
```

#### 2️⃣ NestJS enruta la petición
- **URL:** `GET /academic/students/status/active`
- **Archivo:** `src/academic/student/student.controller.ts`
- **Método:** `findActive()`

```typescript
@Get('status/active')
@ApiOperation({ summary: 'List all active students with their career (Parte 1)' })
findActive() {
    return this.studentService.findActiveWithCareer();
}
```

#### 3️⃣ El Controller llama al Service
- **Archivo:** `src/academic/student/student.service.ts`
- **Método:** `findActiveWithCareer()`

```typescript
async findActiveWithCareer() {
    return this.dataService.student.findMany({
        where: { isActive: true },
        include: { career: true },
    });
}
```

#### 4️⃣ Prisma genera y ejecuta SQL
**SQL Generado automáticamente:**
```sql
SELECT s.*, c.*
FROM students s
INNER JOIN careers c ON s.career_id = c.id
WHERE s.is_active = true;
```

#### 5️⃣ PostgreSQL devuelve resultados
```json
[
  {
    "id": 1,
    "firstName": "Josue",
    "lastName": "Alban",
    "isActive": true,
    "career": {
      "id": 1,
      "name": "Software Engineering"
    }
  }
]
```

#### 6️⃣ Respuesta al cliente
- **Status:** 200 OK
- **Content-Type:** application/json
- **Body:** Array de estudiantes con sus carreras

---

## PARTE 2: Flujo de Operaciones Lógicas

### Ejemplo: Búsqueda Avanzada de Estudiantes

#### 1️⃣ Cliente con query parameters
```powershell
Invoke-RestMethod -Method Get -Uri "http://localhost:3000/academic/students/search/advanced?careerId=1&periodId=1"
```

#### 2️⃣ Controller extrae parámetros
```typescript
@Get('search/advanced')
searchAdvanced(
    @Query('careerId', ParseIntPipe) careerId: number,  // Convierte a número
    @Query('periodId', ParseIntPipe) periodId: number,
) {
    return this.studentService.searchAdvanced(careerId, periodId);
}
```

**Validaciones automáticas:**
- `ParseIntPipe` valida que sean números
- Si no son válidos, devuelve 400 Bad Request automáticamente

#### 3️⃣ Service construye la query compleja
```typescript
async searchAdvanced(careerId: number, periodId: number) {
    return this.dataService.student.findMany({
        where: {
            AND: [                              // TODAS deben cumplirse
                { isActive: true },             // Condición 1
                { careerId: careerId },         // Condición 2
                {
                    enrollments: {
                        some: {                 // AL MENOS UNA matrícula
                            academicPeriodId: periodId
                        }
                    }
                }                               // Condición 3
            ]
        },
        include: { career: true, enrollments: true }
    });
}
```

#### 4️⃣ SQL con JOINs y EXISTS
```sql
SELECT s.*, c.*, e.*
FROM students s
INNER JOIN careers c ON s.career_id = c.id
LEFT JOIN enrollments e ON s.id = e.student_id
WHERE s.is_active = true
  AND s.career_id = 1
  AND EXISTS (
    SELECT 1 FROM enrollments e2
    WHERE e2.student_id = s.id
    AND e2.academic_period_id = 1
  );
```

---

## PARTE 3: Flujo de Consultas Nativas

### Ejemplo: Reporte de Estudiantes

#### 1️⃣ Cliente solicita reporte
```powershell
Invoke-RestMethod -Method Get -Uri "http://localhost:3000/academic/enrollments/report/native-stats"
```

#### 2️⃣ Controller delega al Service
```typescript
@Get('report/native-stats')
getReport() {
    return this.enrollmentService.getNativeStudentReport();
}
```

#### 3️⃣ Service ejecuta SQL directo
```typescript
async getNativeStudentReport() {
    try {
        return await this.dataService.$queryRaw`
            SELECT 
                s.first_name || ' ' || s.last_name as "studentName",
                c.name as "careerName",
                COUNT(e.id)::int as "totalSubjects"
            FROM students s
            JOIN careers c ON s.career_id = c.id
            LEFT JOIN enrollments e ON s.id = e.student_id
            GROUP BY s.id, s.first_name, s.last_name, c.name
            ORDER BY "totalSubjects" DESC
        `;
    } catch (error) {
        console.error('Error in native report:', error);
        throw error;
    }
}
```

**Diferencias clave:**
- ✅ SQL escrito manualmente
- ✅ Uso de funciones SQL avanzadas (||, COUNT, GROUP BY)
- ✅ `$queryRaw` escapa valores automáticamente
- ✅ Manejo de errores con try/catch

#### 4️⃣ PostgreSQL ejecuta directamente
El SQL se ejecuta tal como está escrito (con parámetros escapados).

#### 5️⃣ Respuesta formateada
```json
[
  {
    "studentName": "Josue Alban",
    "careerName": "Software Engineering",
    "totalSubjects": 1
  }
]
```

---

## PARTE 4: Flujo de Transacciones

### Ejemplo: Crear Matrícula con Validaciones

#### 1️⃣ Cliente envía datos
```powershell
$body = @{
    studentId = 1
    subjectId = 1
    academicPeriodId = 1
} | ConvertTo-Json

Invoke-RestMethod -Method Post -Uri "http://localhost:3000/academic/enrollments" -Body $body -ContentType "application/json"
```

#### 2️⃣ Controller valida DTO
```typescript
@Post()
create(@Body() createEnrollmentDto: CreateEnrollmentDto) {
    return this.enrollmentService.create(createEnrollmentDto);
}
```

**Validaciones del DTO (automáticas por class-validator):**
```typescript
export class CreateEnrollmentDto {
    @IsInt()
    studentId: number;

    @IsInt()
    subjectId: number;

    @IsInt()
    academicPeriodId: number;
}
```

Si los datos son inválidos → **400 Bad Request** (sin llegar al service)

#### 3️⃣ Service inicia transacción
```typescript
return this.dataService.$transaction(async (tx) => {
    // Todo aquí ES ATÓMICO
});
```

**PostgreSQL ejecuta:**
```sql
BEGIN TRANSACTION;
```

#### 4️⃣ Paso a paso dentro de la transacción

```typescript
// PASO 1: Verificar estudiante
const student = await tx.student.findUnique({ where: { id: studentId } });
if (!student?.isActive) throw new BadRequestException('...');
```
**SQL:**
```sql
SELECT * FROM students WHERE id = 1;
```

```typescript
// PASO 2: Verificar período
const period = await tx.academicPeriod.findUnique({ where: { id: academicPeriodId } });
if (!period?.isActive) throw new BadRequestException('...');
```
**SQL:**
```sql
SELECT * FROM academic_periods WHERE id = 1;
```

```typescript
// PASO 3: Verificar cupos
const subject = await tx.subject.findUnique({ where: { id: subjectId } });
if (subject.availableQuota <= 0) throw new BadRequestException('...');
```
**SQL:**
```sql
SELECT * FROM subjects WHERE id = 1;
```

```typescript
// PASO 4: Verificar duplicados
const existing = await tx.enrollment.findUnique({
    where: { studentId_subjectId_academicPeriodId: { ... } }
});
if (existing) throw new ConflictException('...');
```
**SQL:**
```sql
SELECT * FROM enrollments
WHERE student_id = 1 AND subject_id = 1 AND academic_period_id = 1;
```

```typescript
// PASO 5: Crear matrícula
const enrollment = await tx.enrollment.create({ data: dto });
```
**SQL:**
```sql
INSERT INTO enrollments (student_id, subject_id, academic_period_id)
VALUES (1, 1, 1)
RETURNING *;
```

```typescript
// PASO 6: Descontar cupo
await tx.subject.update({
    where: { id: subjectId },
    data: { availableQuota: { decrement: 1 } }
});
```
**SQL:**
```sql
UPDATE subjects
SET available_quota = available_quota - 1
WHERE id = 1;
```

#### 5️⃣ Confirmación o Rollback

**Si TODO salió bien:**
```sql
COMMIT;
```
- ✅ Matrícula creada
- ✅ Cupo descontado
- ✅ Cambios persistentes

**Si ALGO falló (cualquier throw):**
```sql
ROLLBACK;
```
- ❌ Matrícula NO creada
- ❌ Cupo NO descontado
- ✅ Base de datos intacta

#### 6️⃣ Respuesta al cliente

**Éxito (201 Created):**
```json
{
  "id": 3,
  "studentId": 1,
  "subjectId": 1,
  "academicPeriodId": 1,
  "enrolledAt": "2026-01-30T13:25:00.000Z"
}
```

**Error (400/404/409):**
```json
{
  "statusCode": 400,
  "message": "No available quota for subject Programming I"
}
```

---

## Comparación de Flujos

| Aspecto | Derivadas | Lógicas | Nativas | Transacciones |
|---------|-----------|---------|---------|---------------|
| **SQL** | Auto-generado | Auto-generado | Manual | Mixto |
| **Complejidad** | Baja | Media | Media-Alta | Alta |
| **Seguridad** | Alta (ORM) | Alta (ORM) | Alta (escapado) | Máxima (ACID) |
| **Performance** | Buena | Buena | Óptima | Buena |
| **Validaciones** | En service | En service | En service | Multiple checks |
| **Tipo-seguro** | ✅ Sí | ✅ Sí | ⚠️ Parcial | ✅ Sí |

---

## Manejo de Errores en Cada Capa

### 1️⃣ Validación de DTO (Controller)
```typescript
// Automático por class-validator
@IsInt()
studentId: number;
```
**Error:** 400 Bad Request - "studentId must be an integer"

### 2️⃣ Pipes de Transformación
```typescript
@Param('id', ParseIntPipe) id: number
```
**Error:** 400 Bad Request - "Validation failed (numeric string is expected)"

### 3️⃣ Lógica de Negocio (Service)
```typescript
if (!student) throw new NotFoundException('Student not found');
```
**Error:** 404 Not Found - "Student not found"

### 4️⃣ Errores de Base de Datos
```typescript
try {
    await prisma.create(...);
} catch (error) {
    // Constraint violation, foreign key, etc.
}
```
**Error:** 500 Internal Server Error (procesado por exception filters)

---

## Diagrama de Flujo Visual

```
┌─────────────────┐
│   PowerShell    │ Invoke-RestMethod
│   (Cliente)     │
└────────┬────────┘
         │ HTTP Request
         ↓
┌─────────────────┐
│   NestJS API    │
│   :3000         │
└────────┬────────┘
         │ Routing
         ↓
┌─────────────────┐
│   Controller    │ @Get(), @Post()
│   - Validación  │ @Body(), @Param()
│   - Pipes       │ ParseIntPipe
└────────┬────────┘
         │ Llama método
         ↓
┌─────────────────┐
│    Service      │ Lógica de negocio
│   - findMany    │ Operadores lógicos
│   - $queryRaw   │ SQL nativo
│   - $transaction│ ACID
└────────┬────────┘
         │ Query
         ↓
┌─────────────────┐
│  DataService    │ Prisma Client
│  (Prisma)       │ ORM
└────────┬────────┘
         │ SQL
         ↓
┌─────────────────┐
│   PostgreSQL    │ Base de datos
│   academic_db   │
└────────┬────────┘
         │ Resultados
         ↓
┌─────────────────┐
│   JSON Response │ Serialización
│   200/201/400   │ HTTP Status
└─────────────────┘
```

---

## Buenas Prácticas Aplicadas

✅ **Separación de responsabilidades:** Controller → Service → DataService
✅ **Validación en capas:** DTO → Pipes → Service
✅ **Manejo de errores:** try/catch + HTTP exceptions
✅ **Type-safety:** TypeScript + Prisma
✅ **Seguridad:** Prisma escapa valores, previene SQL injection
✅ **ACID:** Transacciones para operaciones críticas
✅ **RESTful:** Verbos HTTP correctos (GET, POST)
✅ **Documentación:** Swagger/OpenAPI con @ApiOperation

---

## Resumen Ejecutivo

Este sistema implementa **4 tipos de consultas** con flujos diferenciados:

1. **Derivadas:** ORM genera SQL → Simple y seguro
2. **Lógicas:** Operadores AND/OR/NOT → Filtros complejos
3. **Nativas:** SQL manual → Máximo control
4. **Transacciones:** ACID garantizado → Integridad crítica

Cada flujo pasa por **validación, procesamiento y serialización** antes de llegar al cliente, garantizando **robustez, seguridad y mantenibilidad**.

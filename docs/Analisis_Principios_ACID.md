# Análisis de Principios ACID en el Sistema de Gestión Universitaria

**Autor:** Josue Alban  
**Fecha:** 21 de enero de 2026  
**Asignatura:** NestJS - Clase 3  
**Tema:** Consultas, Operaciones Lógicas y Transacciones en Sistemas de Gestión

---

## Introducción

Los principios ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad) son fundamentales para garantizar la integridad de los datos en sistemas transaccionales. En este documento se analiza cómo se aplican estos principios en el proceso de matriculación de estudiantes dentro del sistema universitario desarrollado con NestJS y Prisma.

---

## 1. Atomicidad (Atomicity)

### ¿Qué es?
La atomicidad garantiza que una transacción se ejecute completamente o no se ejecute en absoluto. No existen estados intermedios.

### Aplicación en la Matriculación

En el método `EnrollmentService.create()` (líneas 11-54), la transacción de matriculación se implementa utilizando `$transaction()` de Prisma:

```typescript
return this.dataService.$transaction(async (tx) => {
    const enrollment = await tx.enrollment.create({
        data: createEnrollmentDto,
    });

    await tx.subject.update({
        where: { id: subjectId },
        data: { availableQuota: { decrement: 1 } },
    });

    return enrollment;
});
```

**Análisis:**
- Si la creación de la matrícula (`enrollment.create`) tiene éxito pero la actualización del cupo falla, **toda la transacción se revierte**.
- Si ocurre cualquier error en las validaciones previas (estudiante inactivo, sin cupos, etc.), la transacción ni siquiera comienza.
- **Resultado:** O se matricula el estudiante Y se descuenta el cupo, o ninguna de las dos operaciones ocurre.

---

## 2. Consistencia (Consistency)

### ¿Qué es?
La consistencia asegura que la base de datos pasa de un estado válido a otro estado válido, respetando todas las reglas de integridad definidas.

### Garantías de Consistencia

El sistema implementa múltiples validaciones antes de permitir la matriculación:

1. **Validación de Estudiante Activo** (líneas 15-17):
   ```typescript
   if (!student.isActive) throw new BadRequestException(
       `Student with ID ${studentId} is NOT active`
   );
   ```

2. **Validación de Período Académico Activo** (líneas 20-22):
   ```typescript
   if (!period.isActive) throw new BadRequestException(
       `Academic period with ID ${academicPeriodId} is not active`
   );
   ```

3. **Validación de Cupos Disponibles** (líneas 25-27):
   ```typescript
   if (subject.availableQuota <= 0) throw new BadRequestException(
       `No available quota for subject ${subject.name}`
   );
   ```

4. **Prevención de Duplicados** (líneas 30-39):
   - Utiliza índice único compuesto `studentId_subjectId_academicPeriodId`
   - Impide que un estudiante se matricule dos veces en la misma materia del mismo período

**Análisis:**
- Las reglas de negocio se verifican **antes** de iniciar la transacción
- La base de datos mantiene su integridad referencial a nivel de esquema (foreign keys)
- **Resultado:** Solo se permiten matrículas que cumplan todas las reglas del dominio

---

## 3. Aislamiento (Isolation)

### ¿Qué es?
El aislamiento garantiza que las transacciones concurrentes se ejecuten de manera independiente, sin interferencias mutuas.

### Manejo de Concurrencia en Matrículas Simultáneas

**Escenario crítico:** Dos estudiantes intentan matricularse simultáneamente en la misma materia que tiene un solo cupo disponible.

**Mecanismo de protección:**

1. **Bloqueo optimista de Prisma:**
   - Prisma utiliza transacciones a nivel de base de datos
   - PostgreSQL (motor utilizado) aplica niveles de aislamiento SERIALIZABLE o READ COMMITTED

2. **Operación atómica de decremento:**
   ```typescript
   data: { availableQuota: { decrement: 1 } }
   ```
   - Esta operación es atómica a nivel de base de datos
   - El decremento se ejecuta como `UPDATE subjects SET available_quota = available_quota - 1`

3. **Verificación previa:**
   - La validación `subject.availableQuota <= 0` se ejecuta dentro de la transacción
   - Si dos transacciones leen el mismo cupo disponible, solo una podrá decrementarlo exitosamente

**Análisis:**
- **Primera transacción:** Lee cupo=1, valida, matricula, decrementa a 0 → **ÉXITO**
- **Segunda transacción:** Lee cupo=0 (después del commit de la primera), valida, detecta 0 cupos → **FALLA con BadRequestException**
- **Resultado:** Se evitan sobre-matriculaciones gracias al aislamiento transaccional

---

## 4. Durabilidad (Durability)

### ¿Qué es?
La durabilidad asegura que una vez que una transacción se confirma (commit), los cambios persisten permanentemente, incluso ante fallos del sistema.

### Importancia en el Sistema Universitario

**Criticidad de los datos:**
- Las matrículas representan compromisos académicos y financieros
- La pérdida de datos de matriculación tendría consecuencias graves:
  - Estudiantes sin registro de sus materias
  - Pérdida de información de pagos asociados
  - Inconsistencias en reportes académicos

**Garantías de Prisma y PostgreSQL:**

1. **Write-Ahead Logging (WAL):**
   - PostgreSQL escribe todos los cambios en un log de transacciones antes de aplicarlos
   - Si el servidor falla, puede recuperarse usando el WAL

2. **Commits persistentes:**
   - Cuando `$transaction` completa exitosamente, Prisma hace commit
   - PostgreSQL garantiza que el commit se escribe en disco

3. **Respaldo en la eliminación:**
   ```typescript
   async remove(id: number) {
       return this.dataService.$transaction(async (tx) => {
           await tx.enrollment.delete({ where: { id } });
           await tx.subject.update({
               data: { availableQuota: { increment: 1 } },
           });
           return { message: 'Enrollment deleted and quota restored' };
       });
   }
   ```
   - Incluso la eliminación es transaccional
   - Se restaura el cupo automáticamente

**Análisis:**
- Una vez confirmada una matrícula, el registro **sobrevivirá** a:
  - Reinicios del servidor
  - Caídas de energía
  - Fallos de hardware (con configuración de réplicas adecuada)
- **Resultado:** Confiabilidad total en los datos académicos críticos

---

## Conclusión

La implementación de transacciones en el sistema de gestión universitaria demuestra una correcta aplicación de los principios ACID:

- **Atomicidad:** Garantizada mediante `$transaction()` de Prisma
- **Consistencia:** Validaciones exhaustivas antes y durante la transacción
- **Aislamiento:** Protección contra condiciones de carrera en matrículas concurrentes
- **Durabilidad:** Persistencia garantizada por PostgreSQL y Prisma

Este diseño asegura la integridad de los datos académicos, protege contra errores de concurrencia y proporciona una base sólida para un sistema universitario confiable.

---

## Referencias

- Código fuente: `src/academic/enrollment/enrollment.service.ts`
- Documentación Prisma Transactions: https://www.prisma.io/docs/concepts/components/prisma-client/transactions
- PostgreSQL ACID Compliance: https://www.postgresql.org/docs/current/tutorial-transactions.html

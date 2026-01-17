# Gestión Universitaria - NestJS (Actividad Práctica CLASE 3)

Este proyecto es una implementación avanzada de un sistema de gestión universitaria utilizando **NestJS** y **Prisma ORM** (v7.0.1). El sistema está diseñado sobre una arquitectura multi-base de datos (Academic, Security, Help) y cumple con los requerimientos de la Actividad Práctica - CLASE 3.

## Funcionalidades Implementadas

### 1. Consultas Avanzadas (ORM)
Se implementaron métodos personalizados en los servicios para extraer información específica:
- **Estudiantes**: Lista de estudiantes activos vinculados a sus respectivas carreras.
- **Asignaturas**: Filtrado de materias asociadas a una carrera académica particular.
- **Docentes**: Identificación de docentes que imparten más de una asignatura.
- **Matrículas**: Consulta de matrículas de un estudiante filtradas por un período académico específico.

### 2. Operaciones Lógicas
Implementación de filtros complejos en la capa de persistencia:
- **Estudiantes**: Búsqueda que combina el estado activo, la carrera y la existencia de matrículas en un período.
- **Docentes**: Relación de docentes de tiempo completo que cumplen con criterios de carga académica o estado de actividad.

### 3. Reporte de SQL Nativo
Implementación de una consulta compleja utilizando `$queryRaw` para generar un reporte estadístico:
- **Campos**: Nombre del Estudiante, Carrera, Total de Materias Matriculadas.
- **Orden**: Descendente por cantidad de materias.

### 4. Transacción ACID de Matrícula
El proceso de inscripción de estudiantes (`EnrollmentService.create`) se ha diseñado siguiendo los principios ACID:
- **Validaciones**: Verificación de estado del alumno, vigencia del período y disponibilidad de cupos.
- **Atomicidad**: Uso de `$transaction` para asegurar que el registro de matrícula y la actualización del inventario de cupos ocurran simultáneamente o fallen en conjunto.

### 5. Documentación de Principios ACID
Se incluye un análisis detallado de la aplicación de Atomicity, Consistency, Isolation y Durability en el archivo `ACID_ANALYSIS.md`.

### 6. Estandarización de la API
Todos los controladores de la capa académica han sido mejorados con métodos `PUT` para permitir actualizaciones completas de los recursos, siguiendo los estándares RESTful.

## Tecnologías Utilizadas
- **Framework**: NestJS
- **ORM**: Prisma 7.0.1
- **Base de Datos**: PostgreSQL
- **Documentación**: Swagger/OpenAPI

## Configuración y Ejecución

1. Configurar las variables de entorno en el archivo `.env`.
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Generar clientes de Prisma:
   ```bash
   npx prisma generate --schema=prisma/academic/schema-academic.prisma
   npx prisma generate --schema=prisma/security/schema-security.prisma
   npx prisma generate --schema=prisma/help/schema-help.prisma
   ```
4. Iniciar la aplicación:
   ```bash
   npm run start:dev
   ```

---
*Este proyecto fue desarrollado como parte de la formación avanzada en NestJS.*

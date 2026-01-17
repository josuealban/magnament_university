# Análisis del Sistema Universitario (Reinicio Uni)

Este documento proporciona un desglose técnico detallado de la arquitectura y lógica del sistema actual.

## 1. Arquitectura del Sistema
El proyecto sigue una arquitectura de **Monolito Modular** basada en **NestJS**, organizada por dominios de negocio claros.

### Dominios de Negocio
- **Academic (Académico):** Gestiona la vida académica de la universidad.
- **Security (Seguridad):** Controla el acceso, usuarios y permisos (RBAC).
- **Help (Ayuda/Soporte):** Encargado de la observabilidad y registros del sistema.

## 2. Stack Tecnológico
- **Framework:** NestJS (Node.js/TypeScript).
- **ORM:** Prisma 7.0.1.
- **Base de Datos:** PostgreSQL (Arquitectura multi-base de datos).
- **Validación:** `class-validator` y `class-transformer`.
- **Configuración:** `@nestjs/config`.

## 3. Modelo de Datos (Esquemas Prisma)

### Dominio Académico (`schema-academic.prisma`)
- **Gestión de Carreras:** `Specialty` -> `Career` -> `Cycle`.
- **Planificación:** `Subject` (Materias) relacionadas con ciclos y carreras.
- **Actores:** `Teacher` y `Student`.
- **Relaciones:** `TeacherSubject` y `StudentSubject` (para notas).
- **Proceso Core:** `Enrollment` (Matrículas) vinculado a un `AcademicPeriod`.

### Dominio de Seguridad (`schema-security.prisma`)
- Implementa **RBAC (Role-Based Access Control)**.
- Entidades: `User`, `Role`, `Permission`.
- Tablas intermedias: `UserRole`, `RolePermission`.

### Dominio de Soporte (`schema-help.prisma`)
- `AuditLog`: Registro de acciones de usuario.
- `SystemLog`: Registro de eventos del servidor (INFO, WARN, ERROR).

## 4. Lógica de Negocio Crítica

### Configuración Multi-Base de Datos
El sistema genera tres clientes de Prisma independientes en `src/generated/`, permitiendo que cada dominio escale o se mueva a una base de datos física distinta sin afectar al resto.

### Proceso de Matrícula
La matrícula es la operación más compleja, ya que requiere validar:
1. Existencia del estudiante y la materia.
2. Disponibilidad de cupo (`quota`) en la materia.
3. Periodo académico activo.

## 5. Puntos de Extensibilidad
- El sistema está preparado para añadir micro-servicios.
- La separación de esquemas facilita la migración a arquitecturas distribuidas.

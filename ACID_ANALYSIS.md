# Análisis de Principios ACID - Transacción de Matrícula

En el desarrollo del sistema universitario, la operación de **Matrícula** es crítica y debe garantizar la integridad de los datos. A continuación, se detalla cómo se aplican los principios ACID en la implementación realizada en `EnrollmentService.ts`.

## 1. Atomicidad (Atomicity)
La atomicidad garantiza que la operación se realice por completo o no se realice en absoluto. 
- **Implementación**: Utilizamos `$transaction` de Prisma para agrupar la creación del registro de matrícula (`enrollment.create`) y la actualización del cupo de la asignatura (`subject.update`).
- **Efecto**: Si la creación de la matrícula tiene éxito pero la actualización del cupo falla (o viceversa), Prisma revierte automáticamente todos los cambios realizados dentro del bloque de la transacción.

## 2. Consistencia (Consistency)
La consistencia asegura que la base de datos pase de un estado válido a otro estado válido, respetando todas las reglas y restricciones.
- **Implementación**: Antes de iniciar la transacción, validamos:
    - Que el estudiante exista y esté **activo**.
    - Que el período académico esté **activo**.
    - Que la asignatura tenga **cupo disponible**.
    - Que no exista una matrícula duplicada para el mismo estudiante, materia y período.
- **Efecto**: La base de datos nunca tendrá registros de matrícula para estudiantes inactivos o asignaturas sin capacidad real.

## 3. Aislamiento (Isolation)
El aislamiento garantiza que las transacciones simultáneas no interfieran entre sí.
- **Implementación**: El motor de base de datos (PostgreSQL) y el gestor de transacciones de Prisma manejan los niveles de aislamiento.
- **Efecto**: Si dos estudiantes intentan matricularse en el último cupo disponible al mismo tiempo, las transacciones se ejecutarán de forma aislada, asegurando que solo uno logre la matrícula y el cupo no quede en valores negativos.

## 4. Durabilidad (Durability)
La durabilidad garantiza que, una vez confirmada la transacción, los cambios persistirán incluso en caso de un fallo del sistema.
- **Implementación**: La transacción solo se considera completa cuando el motor de base de datos confirma que los datos se han escrito en el almacenamiento persistente.
- **Efecto**: Una vez que el servicio responde con éxito al usuario, la matrícula está garantizada y protegida contra reinicios del servidor o fallos de energía.

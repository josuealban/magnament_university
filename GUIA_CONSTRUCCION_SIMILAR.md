# Guía de Construcción: Sistema de Gestión Universitaria Original

Esta guía detalla cómo construir un sistema similar al actual, enfocándose en la originalidad, mejores prácticas y evitando el plagio directo.

## 1. Diseño de Arquitectura (Modernización)
En lugar de un monolito modular acoplado al ORM, propongo usar **Arquitectura Hexagonal (Puertos y Adaptadores)**.

### Ventajas:
- **Independencia del ORM:** Si mañana quieres cambiar Prisma por TypeORM o una base de datos NoSQL, solo cambias el adaptador, no la lógica de negocio.
- **Testabilidad:** Facilita las pruebas unitarias sin necesidad de base de datos.

## 2. Estrategia de Modularización
Divide tu aplicación en módulos financieros, académicos y administrativos con límites claros:
- `module/shared`: Utilidades comunes, decoradores personalizados y excepciones globales.
- `module/enrollment`: Lógica pura de inscripciones.
- `module/curriculum`: Gestión de mallas curriculares y sílabos.

## 3. Modelado de Base de Datos (Diferenciación)
Para evitar que el esquema sea idéntico al de referencia:
- **Nomenclatura:** Usa términos diferentes (ej: `Course` en lugar de `Subject`, `Semester` en lugar de `Cycle`).
- **Estructura:** Considera agrupar datos de contacto en un objeto `JSONB` de PostgreSQL en lugar de columnas separadas para mayor flexibilidad.
- **Identificadores:** Usa `UUID` en lugar de `Autoincrement` para mejorar la seguridad y escalabilidad en sistemas distribuidos.

## 4. Implementación de Funcionalidades Core

### Seguridad (RBAC Avanzado)
Implementa un sistema de permisos basado en **Scopes** (ej: `read:students`, `write:enrollments`) en lugar de solo roles fijos. Esto da un control mucho más granular y profesional.

### Proceso de Matrícula (Transaccional)
Asegúrate de usar transacciones ACID. En Prisma:
```typescript
await prisma.$transaction([
  prisma.subject.update({ where: { id }, data: { quota: { decrement: 1 } } }),
  prisma.enrollment.create({ data: { ... } })
]);
```
*Tip: Implementa una lista de espera si el cupo llega a cero, una funcionalidad que el sistema actual no posee.*

## 5. Mejores Prácticas (El Toque Profesional)
- **Documentación Swagger:** Genera automáticamente la documentación de la API.
- **Logging Centralizado:** Usa interceptores para registrar cada petición y respuesta.
- **Manejo de Errores:** Crea una clase base para errores de negocio que devuelva códigos HTTP semánticos.

import 'dotenv/config';
import { PrismaClient } from './generated/client-academic';

// Configurar URL de conexión si no existe, usando la de Academic por defecto
if (!process.env.DATABASE_URL && process.env.DATABASE_ACADEMIC_URL) {
    process.env.DATABASE_URL = process.env.DATABASE_ACADEMIC_URL;
}

async function main() {
    // Inicializamos el cliente de Prisma
    const prisma = new PrismaClient({})
    console.log('🚀 Iniciando demostración de consultas NestJS/Prisma...\n');

    try {
        // ==========================================
        // 1. Consultas Derivadas (Fluent API)
        // ==========================================
        console.log('--- 1. Consultas Derivadas ---');

        // findMany: Obtener registros con paginación y ordenamiento
        // Equivalente a: SELECT * FROM careers ORDER BY name ASC LIMIT 5;
        const careers = await prisma.career.findMany({
            take: 5,
            orderBy: { name: 'asc' },
            include: { specialty: true }, // Eager loading (JOIN)
        });
        console.log(`✅ findMany (Carreras): Se encontraron ${careers.length} carreras.`);
        if (careers.length > 0) {
            console.log(`   Ejemplo: ${careers[0].name} (Especialidad: ${careers[0].specialty.name})`);
        }

        // findFirst: Obtener el primer registro que cumpla una condición
        const subject = await prisma.subject.findFirst({
            where: {
                credits: { gte: 3 } // "gte" = Greater Than or Equal (Mayor o igual)
            }
        });
        console.log(`✅ findFirst (Materia >= 3 créditos): ${subject?.name || 'No encontrada'}`);


        // ==========================================
        // 2. Operaciones Lógicas (AND, OR, NOT)
        // ==========================================
        console.log('\n--- 2. Operaciones Lógicas ---');

        // Combinación de condiciones
        const teachers = await prisma.teacher.findMany({
            where: {
                OR: [
                    { employmentType: 'FULL_TIME' },
                    { firstName: { contains: 'Dr.', mode: 'insensitive' } } // Búsqueda insensible a mayúsculas
                ],
                AND: {
                    isActive: true
                }
            },
            take: 3
        });
        console.log(`✅ Filtro complejo (AND/OR): ${teachers.length} profesores encontrados.`);


        // ==========================================
        // 3. Consultas Nativas (Raw SQL)
        // ==========================================
        console.log('\n--- 3. Consultas Nativas (SQL) ---');

        // Lectura de datos usando SQL puro
        // Útil para reportes complejos o optimizaciones específicas
        try {
            const activeStudentsCount: any = await prisma.$queryRaw`SELECT count(*)::int as count FROM students WHERE is_active = true`;
            console.log(`✅ SQL Nativo (Conteo estudiantes activos): ${activeStudentsCount[0].count}`);
        } catch (e) {
            console.log('⚠️ SQL Nativo: No se pudo ejecutar (verificar conexión a DB)');
        }


        // ==========================================
        // 4. Transacciones y Principios ACID
        // ==========================================
        console.log('\n--- 4. Transacciones (ACID) ---');
        console.log('ℹ️ ACID: Atomicidad, Consistencia, Aislamiento, Durabilidad.');

        // $transaction asegura Atomicidad: Todas las operaciones dentro pasan, o ninguna pasa.
        if (careers.length > 0) {
            const timestamp = Date.now();
            const randomUserId = Math.floor(Math.random() * 100000);

            try {
                const result = await prisma.$transaction(async (tx) => {
                    // Paso A: Crear Estudiante
                    const newStudent = await tx.student.create({
                        data: {
                            firstName: 'Estudiante',
                            lastName: `DemoTransaccion`,
                            email: `demo.${timestamp}@test.com`,
                            phone: '555-0199',
                            userId: randomUserId, // Simulación ID usuario externo
                            careerId: careers[0].id
                        }
                    });
                    console.log(`   -> Paso A: Estudiante creado en memoria (ID: ${newStudent.id})`);

                    // Paso B: Validar algo (Simulando lógica de negocio)
                    // Si lanzamos un error aquí, el estudiante del Paso A JAMÁS se guardará en la DB (Rollback automático)
                    if (!newStudent.email.includes('@')) {
                        throw new Error("Email inválido, abortando transacción.");
                    }

                    return newStudent;
                });
                console.log(`✅ Transacción COMMIT: Los datos se persistieron correctamente.`);
            } catch (error) {
                console.log(`❌ Transacción ROLLBACK: Ocurrió un error y se deshicieron los cambios. Mensaje: ${error.message}`);
            }
        } else {
            console.log('⚠️ Saltando demo de transacción: No hay carreras para asociar.');
        }

    } catch (error) {
        console.error('\n❌ Error General:', error);
    } finally {
        // Cerrar conexión
        await prisma.$disconnect();
    }
}

main();

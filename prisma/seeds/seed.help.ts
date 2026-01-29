import "dotenv/config";
import { PrismaClient } from "../../src/generated/client-help";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_HELP_URL ?? process.env.DATABASE_URL ?? "",
});

async function main() {
    const prisma = new PrismaClient({ adapter });

    // Clean current data
    await prisma.auditLog.deleteMany();
    await prisma.systemLog.deleteMany();

    // Seed Audit Logs
    await prisma.auditLog.createMany({
        data: [
            {
                action: "LOGIN",
                resource: "AUTH",
                userId: 1,
                details: { ip: "127.0.0.1" },
            },
            {
                action: "CREATE",
                resource: "STUDENT",
                userId: 1,
                details: { studentId: 101 },
            },
            {
                action: "UPDATE",
                resource: "ENROLLMENT",
                userId: 2,
                details: { enrollmentId: 50, changes: { status: "PAID" } },
            },
        ],
    });

    // Seed System Logs
    await prisma.systemLog.createMany({
        data: [
            {
                level: "INFO",
                message: "Sistema de ayuda iniciado correctamente",
                context: "SystemInit",
            },
            {
                level: "ERROR",
                message: "Error de conexión con la base de datos académica (reintento 1)",
                context: "AcademicDB_Link",
            },
        ],
    });

    console.log("✅ Help seed OK: AuditLogs and SystemLogs created.");
    await prisma.$disconnect();
}

main().catch(async (e) => {
    console.error("❌ Help seed error:", e);
    process.exit(1);
});

import "dotenv/config";
import { PrismaClient } from "../../src/generated/client-security";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_SECURITY_URL ?? process.env.DATABASE_URL ?? "",
});

async function main() {
    const prisma = new PrismaClient({ adapter });

    // Limpieza en orden correcto por FK
    await prisma.rolePermission.deleteMany();
    await prisma.userRole.deleteMany();
    await prisma.permission.deleteMany();
    await prisma.role.deleteMany();
    await prisma.user.deleteMany();

    const adminRole = await prisma.role.create({
        data: { name: "ADMIN", description: "Administrador" },
    });

    const perm = await prisma.permission.create({
        data: { name: "MANAGE_ENROLLMENTS", description: "Gestionar matrículas" },
    });

    await prisma.rolePermission.create({
        data: { roleId: adminRole.id, permissionId: perm.id },
    });

    const user = await prisma.user.create({
        data: {
            name: "Admin",
            email: "admin@uni.edu",
            username: "admin",
            password: "hashed-demo",
            isActive: true,
        },
    });

    await prisma.userRole.create({
        data: { userId: user.id, roleId: adminRole.id },
    });

    console.log("✅ Security seed OK");
    await prisma.$disconnect();
}

main().catch(async (e) => {
    console.error("❌ Security seed error:", e);
    process.exit(1);
});

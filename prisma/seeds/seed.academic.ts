import "dotenv/config";
import { PrismaClient, EmploymentType } from "../../src/generated/client-academic";
import { PrismaPg } from "@prisma/adapter-pg";

// Adapter para engineType="client" (Prisma 7 + Postgres)
const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_ACADEMIC_URL ?? process.env.DATABASE_URL ?? "",
});

async function main() {
    const prisma = new PrismaClient({ adapter });

    console.log("🌱 Seed Academic (compatible con tu schema) ...");

    try {
        // 1) Specialty
        const specialty = await prisma.specialty.upsert({
            where: { name: "Software" },
            update: { description: "Área enfocada en desarrollo de software y sistemas." },
            create: { name: "Software", description: "Área enfocada en desarrollo de software y sistemas." },
        });

        // 2) Career (requiere totalCycles y durationYears)
        const career = await prisma.career.upsert({
            where: { name: "Ingeniería de Software" },
            update: { specialtyId: specialty.id, totalCycles: 9, durationYears: 4 },
            create: { name: "Ingeniería de Software", specialtyId: specialty.id, totalCycles: 9, durationYears: 4 },
        });

        // 3) Cycle (requiere name y number, ambos unique)
        const cycle1 = await prisma.cycle.upsert({
            where: { number: 1 },
            update: { name: "Ciclo 1" },
            create: { name: "Ciclo 1", number: 1 },
        });

        // 4) Teacher (requiere userId unique)
        const teacher = await prisma.teacher.upsert({
            where: { email: "ana.vega@uni.test" },
            update: {
                userId: 20001,
                firstName: "Ana",
                lastName: "Vega",
                isActive: true,
                employmentType: EmploymentType.FULL_TIME,
            },
            create: {
                userId: 20001,
                firstName: "Ana",
                lastName: "Vega",
                email: "ana.vega@uni.test",
                isActive: true,
                employmentType: EmploymentType.FULL_TIME,
            },
        });

        // 5) Subject: unique compuesto (careerId, cycleId, name)
        const subjectExisting = await prisma.subject.findUnique({
            where: {
                careerId_cycleId_name: {
                    careerId: career.id,
                    cycleId: cycle1.id,
                    name: "Bases de Datos",
                },
            },
            select: { id: true },
        });

        const subject = subjectExisting
            ? await prisma.subject.update({
                where: { id: subjectExisting.id },
                data: { credits: 4, maxQuota: 30, availableQuota: 30 },
            })
            : await prisma.subject.create({
                data: {
                    name: "Bases de Datos",
                    credits: 4,
                    maxQuota: 30,
                    availableQuota: 30,
                    careerId: career.id,
                    cycleId: cycle1.id,
                },
            });

        // 6) Vincular Teacher-Subject (tabla puente TeacherSubject)
        await prisma.teacherSubject.upsert({
            where: { teacherId_subjectId: { teacherId: teacher.id, subjectId: subject.id } },
            update: {},
            create: { teacherId: teacher.id, subjectId: subject.id },
        });

        // 7) Student (requiere userId unique)
        const ts = Date.now();
        const student = await prisma.student.create({
            data: {
                userId: 100000 + Math.floor(Math.random() * 900000),
                firstName: "María",
                lastName: "Loja",
                email: `maria.${ts}@test.com`,
                phone: "099000111",
                isActive: true,
                careerId: career.id,
            },
        });

        // 8) Vincular Student-Subject (tabla puente StudentSubject)
        await prisma.studentSubject.upsert({
            where: { studentId_subjectId: { studentId: student.id, subjectId: subject.id } },
            update: {},
            create: { studentId: student.id, subjectId: subject.id, grade: 0, passed: false },
        });

        // 9) AcademicPeriod (name unique)
        const period = await prisma.academicPeriod.upsert({
            where: { name: "2026-1" },
            update: {
                startDate: new Date("2026-01-01"),
                endDate: new Date("2026-06-30"),
                isActive: true,
            },
            create: {
                name: "2026-1",
                startDate: new Date("2026-01-01"),
                endDate: new Date("2026-06-30"),
                isActive: true,
            },
        });

        // 10) Enrollment (unique compuesto studentId, subjectId, academicPeriodId)
        await prisma.enrollment.upsert({
            where: {
                studentId_subjectId_academicPeriodId: {
                    studentId: student.id,
                    subjectId: subject.id,
                    academicPeriodId: period.id,
                },
            },
            update: {},
            create: {
                studentId: student.id,
                subjectId: subject.id,
                academicPeriodId: period.id,
            },
        });

        console.log("✅ Seed Academic listo:");
        console.log(`   Specialty: ${specialty.name}`);
        console.log(`   Career: ${career.name}`);
        console.log(`   Cycle: ${cycle1.name}`);
        console.log(`   Teacher: ${teacher.firstName} ${teacher.lastName}`);
        console.log(`   Subject: ${subject.name}`);
        console.log(`   Student: ${student.firstName} ${student.lastName}`);
        console.log(`   Period: ${period.name}`);
    } finally {
        await prisma.$disconnect();
    }
}

main().catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
});

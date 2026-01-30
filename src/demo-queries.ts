import "dotenv/config";
import { PrismaClient, EmploymentType } from "./generated/client-academic";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_ACADEMIC_URL ?? process.env.DATABASE_URL ?? "",
});

async function main() {
  const prisma = new PrismaClient({ adapter });

  console.log("🚀 DEMO: Consultas (Derivadas / Lógicas / Nativas) + Transacciones (ACID)\n");

  try {
    // ======================================================
    // 1) CONSULTAS DERIVADAS (ORM)
    // ======================================================
    console.log("=== 1) Consultas derivadas (ORM) ===");

    const careers = await prisma.career.findMany({
      take: 5,
      orderBy: { name: "asc" },
      include: { specialty: true },
    });
    console.log(`✅ findMany Careers: ${careers.length}`);
    if (careers[0]) console.log(`   Ej: ${careers[0].name} (Specialty: ${careers[0].specialty.name})`);

    const subject = await prisma.subject.findFirst({
      where: { credits: { gte: 3 } },
      orderBy: { createdAt: "desc" },
      select: { id: true, name: true, credits: true },
    });
    console.log(`✅ findFirst Subject (credits>=3): ${subject ? `${subject.name} (${subject.credits})` : "No encontrada"}`);

    const students = await prisma.student.findMany({
      where: { isActive: true },
      take: 5,
      orderBy: { createdAt: "desc" },
      include: { career: true },
    });
    console.log(`✅ Estudiantes activos: ${students.length}`);
    if (students[0]) console.log(`   Ej: ${students[0].firstName} -> ${students[0].career.name}`);

    console.log("");

    // ======================================================
    // 2) OPERACIONES LÓGICAS (AND / OR / NOT)
    // ======================================================
    console.log("=== 2) Operaciones lógicas (AND/OR/NOT) ===");

    const teachers = await prisma.teacher.findMany({
      where: {
        AND: [{ isActive: true }],
        OR: [
          { employmentType: EmploymentType.FULL_TIME },
          { firstName: { contains: "Dr", mode: "insensitive" } },
        ],
        NOT: [{ email: { contains: "spam", mode: "insensitive" } }],
      },
      take: 5,
      orderBy: { lastName: "asc" },
      select: { firstName: true, lastName: true, email: true, employmentType: true, isActive: true },
    });

    console.log(`✅ Teachers filtrados: ${teachers.length}`);
    if (teachers[0]) console.log(`   Ej: ${teachers[0].firstName} ${teachers[0].lastName} (${teachers[0].employmentType})`);

    console.log("");

    // ======================================================
    // 3) CONSULTAS NATIVAS (SQL) - $queryRaw / $executeRaw
    // ======================================================
    console.log("=== 3) Consultas nativas (SQL) ===");

    const activeCount: any = await prisma.$queryRaw`
      SELECT COUNT(*)::int AS count
      FROM students
      WHERE is_active = true
    `;
    console.log(`✅ SQL (COUNT students activos): ${activeCount[0]?.count ?? 0}`);

    const fixedRows: number = await prisma.$executeRaw`
      UPDATE subjects
      SET available_quota = max_quota
      WHERE available_quota > max_quota
    `;
    console.log(`✅ SQL (UPDATE subjects quotas): filas afectadas = ${fixedRows}`);

    console.log("");

    // ======================================================
    // 4) TRANSACCIONES + ACID
    // ======================================================
    console.log("=== 4) Transacciones (ACID) ===");
    console.log("ℹ️ Atomicidad: todo o nada | Consistencia: reglas | Aislamiento: concurrencia | Durabilidad: persistencia");

    const career1 = await prisma.career.findFirst({ select: { id: true } });
    const subject1 = await prisma.subject.findFirst({ select: { id: true } });
    const period1 = await prisma.academicPeriod.findFirst({ where: { isActive: true }, select: { id: true } });

    if (!career1 || !subject1 || !period1) {
      console.log("⚠️ Faltan datos base (career/subject/period). Ejecuta tu seed academic primero.");
      return;
    }

    const ts = Date.now();

    try {
      const studentId = await prisma.$transaction(async (tx) => {
        // A) Crear estudiante (Atomicidad)
        const student = await tx.student.create({
          data: {
            userId: 700000 + Math.floor(Math.random() * 200000),
            firstName: "Estudiante",
            lastName: "Tx",
            email: `tx.${ts}@test.com`,
            isActive: true,
            careerId: career1.id,
          },
        });

        // B) Validar cupo (Consistencia)
        const subj = await tx.subject.findUnique({
          where: { id: subject1.id },
          select: { availableQuota: true },
        });

        if (!subj || subj.availableQuota <= 0) {
          throw new Error("No hay cupo disponible (Consistencia).");
        }

        // C) Decrementar cupo
        await tx.subject.update({
          where: { id: subject1.id },
          data: { availableQuota: { decrement: 1 } },
        });

        // D) Crear matrícula (Durabilidad al commit)
        await tx.enrollment.create({
          data: {
            studentId: student.id,
            subjectId: subject1.id,
            academicPeriodId: period1.id,
          },
        });

        return student.id;
      });

      console.log(`✅ COMMIT: Transacción OK. StudentId=${studentId}`);
    } catch (e: any) {
      console.log(`❌ ROLLBACK: Transacción revertida. Motivo: ${e?.message ?? e}`);
    }

    console.log("\n✅ Demo finalizado.");
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error("❌ Demo error:", e);
  process.exit(1);
});

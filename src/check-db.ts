
import "dotenv/config";
import { PrismaClient } from "./generated/client-academic";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_ACADEMIC_URL ?? "" });
const prisma = new PrismaClient({ adapter });

async function main() {
    const r: any = await prisma.$queryRaw`
    SELECT table_schema, table_name
    FROM information_schema.tables
    WHERE table_name IN ('specialties','careers','students','subjects')
    ORDER BY table_schema, table_name;
  `;
    console.table(r);
    await prisma.$disconnect();
}
main().catch(console.error);


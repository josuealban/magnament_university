import { defineConfig } from "@prisma/config";
import "dotenv/config";

export default defineConfig({
    schema: "prisma/academic/schema-academic.prisma",
    datasource: {
        url: process.env.DATABASE_ACADEMIC_URL!,
    },
});

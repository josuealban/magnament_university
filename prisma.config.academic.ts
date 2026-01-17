import { defineConfig, env } from "prisma/config";

export default defineConfig({
    schema: "prisma/academic/schema-academic.prisma",
    datasource: {
        url: env("DATABASE_ACADEMIC_URL"),
    },
});

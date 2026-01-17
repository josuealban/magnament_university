import { defineConfig, env } from "prisma/config";

export default defineConfig({
    schema: "prisma/security/schema-security.prisma",
    datasource: {
        url: env("DATABASE_SECURITY_URL"),
    },
});

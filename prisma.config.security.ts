import { defineConfig } from "@prisma/config";
import "dotenv/config";

export default defineConfig({
    schema: "prisma/security/schema-security.prisma",
    datasource: {
        url: process.env.DATABASE_SECURITY_URL!,
    },
});

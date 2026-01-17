import { defineConfig, env } from "prisma/config";

export default defineConfig({
    schema: "prisma/help/schema-help.prisma",
    datasource: {
        url: env("DATABASE_HELP_URL"),
    },
});

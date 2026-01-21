import { defineConfig } from "@prisma/config";
import "dotenv/config";

export default defineConfig({
    schema: "prisma/help/schema-help.prisma",
    datasource: {
        url: process.env.DATABASE_HELP_URL!,
    },
});

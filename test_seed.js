const { PrismaClient } = require('./src/generated/client-security');

async function main() {
    try {
        console.log('Instantiating PrismaClient...');
        const prisma = new PrismaClient({
            datasources: {
                db: {
                    url: process.env.DATABASE_SECURITY_URL
                }
            }
        });
        console.log('Client instantiated successfully');
        await prisma.$disconnect();
    } catch (e) {
        console.error('Error instantiating client:', e);

        // Try without datasources if that fails
        try {
            console.log('Retrying without datasources...');
            const prisma2 = new PrismaClient();
            console.log('Client 2 instantiated successfully');
            await prisma2.$disconnect();
        } catch (e2) {
            console.error('Error instantiating client 2:', e2);
        }
    }
}

main();

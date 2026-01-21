import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { PrismaClient } from '../generated/client-academic';

/**
 * Servicio encargado de gestionar la conexión con la base de datos Académica.
 * Prisma 7.0.1 requiere usar un Driver Adapter para conectar a PostgreSQL.
 */
@Injectable()
export class AcademicDataService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    private pool: Pool;

    constructor(private configService: ConfigService) {
        const connectionString = configService.get<string>('DATABASE_ACADEMIC_URL');
        const pool = new Pool({ connectionString });
        const adapter = new PrismaPg(pool);
        super({ adapter });
        this.pool = pool;
    }

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
        await this.pool.end();
    }
}

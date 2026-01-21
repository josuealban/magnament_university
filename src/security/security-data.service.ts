import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { PrismaClient } from '../generated/client-security';

/**
 * Servicio encargado de gestionar la conexión con la base de datos de Seguridad.
 * Maneja el ciclo de vida de la conexión mediante los hooks de NestJS.
 * Prisma 7.0.1 requiere usar un Driver Adapter para conectar a PostgreSQL.
 */
@Injectable()
export class SecurityDataService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    private pool: Pool;

    constructor(private configService: ConfigService) {
        const connectionString = configService.get<string>('DATABASE_SECURITY_URL');
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

import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../generated/client-academic';

@Injectable()
export class AcademicDataService extends PrismaClient
    implements OnModuleInit, OnModuleDestroy {

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}

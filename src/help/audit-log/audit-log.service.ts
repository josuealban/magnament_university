import { Injectable } from '@nestjs/common';
import { CreateAuditLogDto } from './dto/create-audit-log.dto';

@Injectable()
export class AuditLogService {
    async create(dto: CreateAuditLogDto) {
        return { message: 'ok', dto };
    }

    async findAll() {
        return [];
    }

    async findByEntity(entity: string, id: number) {
        return [];
    }
}

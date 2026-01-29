import { Injectable } from '@nestjs/common';
import { HelpDataService } from '../help-data.service';
import { CreateAuditLogDto } from './dto/create-audit-log.dto';

@Injectable()
export class AuditLogService {
    constructor(private readonly helpDb: HelpDataService) { }

    async create(dto: CreateAuditLogDto) {
        return this.helpDb.auditLog.create({
            data: {
                action: dto.action,
                resource: dto.entity,
                details: dto.entityId ? { entityId: dto.entityId } : {},
            },
        });
    }

    async findAll() {
        return this.helpDb.auditLog.findMany({
            orderBy: { createdAt: 'desc' },
            take: 100,
        });
    }

    async findByEntity(resource: string, id?: number) {
        return this.helpDb.auditLog.findMany({
            where: {
                resource,
                ...(id ? { details: { path: ['entityId'], equals: id } } : {})
            },
            orderBy: { createdAt: 'desc' },
        });
    }

    // --- ACTIVIDAD PRÁCTICA ---

    // Parte 2: Operaciones lógicas (Action AND Resource AND Recientes)
    async searchAdvanced(action: string, resource: string) {
        const last24Hours = new Date(Date.now() - 24 * 60 * 60 * 1000);
        return this.helpDb.auditLog.findMany({
            where: {
                AND: [
                    { action: { contains: action, mode: 'insensitive' } },
                    { resource: { contains: resource, mode: 'insensitive' } },
                    { createdAt: { gte: last24Hours } }
                ]
            },
            orderBy: { createdAt: 'desc' }
        });
    }
}

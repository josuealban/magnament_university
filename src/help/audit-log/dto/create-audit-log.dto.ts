import { IsOptional, IsInt, IsString } from 'class-validator';

export class CreateAuditLogDto {
    @IsString()
    action: string;

    @IsString()
    entity: string;

    @IsOptional()
    @IsInt()
    entityId?: number;
}

import { Controller, Get, Post, Body, Param, ParseIntPipe, Query } from '@nestjs/common';
import { AuditLogService } from './audit-log.service';
import { CreateAuditLogDto } from './dto/create-audit-log.dto';

@Controller('help/audit-logs')
export class AuditLogController {
  constructor(private readonly auditLogService: AuditLogService) { }

  @Post()
  createLog(@Body() body: CreateAuditLogDto) {
    return this.auditLogService.create(body);
  }

  @Get()
  findAll() {
    return this.auditLogService.findAll();
  }

  @Get('search/advanced')
  search(
    @Query('action') action: string,
    @Query('resource') resource: string
  ) {
    return this.auditLogService.searchAdvanced(action, resource);
  }

  @Get(':entity/:id')
  findByEntity(
    @Param('entity') entity: string,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.auditLogService.findByEntity(entity, id);
  }
}

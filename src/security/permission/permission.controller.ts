import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { PermissionService } from './permission.service';
import { CreatePermissionDto } from './dto/permission.dto';

@ApiTags('Security - Permissions')
@Controller('security/permissions')
export class PermissionController {
    constructor(private readonly permissionService: PermissionService) { }

    @Post()
    @ApiOperation({ summary: 'Crear un nuevo permiso' })
    create(@Body() dto: CreatePermissionDto) {
        return this.permissionService.add(dto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos los permisos' })
    findAll() {
        return this.permissionService.listAll();
    }
}

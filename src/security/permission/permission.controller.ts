import { Controller, Get, Post, Body, Patch, Delete, Param, ParseIntPipe } from '@nestjs/common';
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

    @Patch(':id')
    @ApiOperation({ summary: 'Actualizar permiso' })
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: any) {
        return this.permissionService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar permiso' })
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.permissionService.remove(id);
    }
}

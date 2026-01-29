import { Controller, Post, Get, Param, ParseIntPipe, Body, Patch, Delete, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Security - Users')
@Controller('security/users')
export class UserController {
    constructor(private readonly users: UserService) { }

    @Post('register')
    @ApiOperation({ summary: 'Registrar un nuevo usuario' })
    signUp(@Body() dto: CreateUserDto) {
        return this.users.register(dto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos los usuarios' })
    list() {
        return this.users.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener detalle de usuario' })
    findUser(@Param('id', ParseIntPipe) id: number) {
        return this.users.findById(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Actualizar usuario' })
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: any) {
        return this.users.update(id, dto);
    }

    @Get('search/advanced')
    @ApiOperation({ summary: 'Búsqueda avanzada de usuarios' })
    search(@Query('username') username: string, @Query('role') role: string) {
        return this.users.searchAdvanced(username, role);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar usuario' })
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.users.remove(id);
    }
}

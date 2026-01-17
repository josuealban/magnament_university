import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    ParseIntPipe,
    Patch,
    Delete,
    Put,
} from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Controller('academic/teachers')
export class TeacherController {
    constructor(private readonly teacherService: TeacherService) { }

    // Crear docente
    @Post()
    create(@Body() dto: CreateTeacherDto) {
        return this.teacherService.create(dto);
    }

    // Listar docentes (con materias opcionalmente)
    @Get()
    findAll() {
        return this.teacherService.findAll();
    }

    @Get('status/multi-subject')
    findMultiSubject() {
        return this.teacherService.findMultiSubjectTeachers();
    }

    @Get('filter/advanced')
    filterAdvanced() {
        return this.teacherService.filterAdvanced();
    }

    // Obtener docente por ID
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.teacherService.findOne(id);
    }

    // Actualizar docente
    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateTeacherDto,
    ) {
        return this.teacherService.update(id, dto);
    }

    @Put(':id')
    updateFull(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: CreateTeacherDto,
    ) {
        return this.teacherService.updateFull(id, dto);
    }

    // Eliminar docente
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.teacherService.remove(id);
    }
}

import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put, Query } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Academic - Students')
@Controller('academic/students')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new student' })
    create(@Body() createStudentDto: CreateStudentDto) {
        return this.studentService.create(createStudentDto);
    }

    @Get()
    @ApiOperation({ summary: 'List all students' })
    findAll() {
        return this.studentService.findAll();
    }

    @Get('status/active')
    @ApiOperation({ summary: 'List all active students with their career (Parte 1)' })
    findActive() {
        return this.studentService.findActiveWithCareer();
    }

    @Get('search/advanced')
    @ApiOperation({ summary: 'Search students with logical operators (Parte 2)' })
    searchAdvanced(
        @Query('careerId', ParseIntPipe) careerId: number,
        @Query('periodId', ParseIntPipe) periodId: number,
    ) {
        return this.studentService.searchAdvanced(careerId, periodId);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a student by ID' })
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.studentService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update a student (Partial)' })
    update(@Param('id', ParseIntPipe) id: number, @Body() updateStudentDto: UpdateStudentDto) {
        return this.studentService.update(id, updateStudentDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a student (Full)' })
    updateFull(@Param('id', ParseIntPipe) id: number, @Body() createStudentDto: CreateStudentDto) {
        return this.studentService.updateFull(id, createStudentDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a student' })
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.studentService.remove(id);
    }
}

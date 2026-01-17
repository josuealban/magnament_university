import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Academic - Enrollments')
@Controller('academic/enrollments')
export class EnrollmentController {
    constructor(private readonly enrollmentService: EnrollmentService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new enrollment' })
    create(@Body() createEnrollmentDto: CreateEnrollmentDto) {
        return this.enrollmentService.create(createEnrollmentDto);
    }

    @Get()
    @ApiOperation({ summary: 'List all enrollments' })
    findAll() {
        return this.enrollmentService.findAll();
    }

    @Get('report/native-stats')
    @ApiOperation({ summary: 'Get native SQL report of enrollments per student (Parte 3)' })
    getReport() {
        return this.enrollmentService.getNativeStudentReport();
    }

    @Get('student/:studentId/period/:periodId')
    @ApiOperation({ summary: 'List enrollments for a student in a specific period (Parte 1)' })
    findByStudentAndPeriod(
        @Param('studentId', ParseIntPipe) studentId: number,
        @Param('periodId', ParseIntPipe) periodId: number,
    ) {
        return this.enrollmentService.findByStudentAndPeriod(studentId, periodId);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get an enrollment by ID' })
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.enrollmentService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update an enrollment (Partial)' })
    update(@Param('id', ParseIntPipe) id: number, @Body() updateEnrollmentDto: UpdateEnrollmentDto) {
        return this.enrollmentService.update(id, updateEnrollmentDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update an enrollment (Full)' })
    updateFull(@Param('id', ParseIntPipe) id: number, @Body() createEnrollmentDto: CreateEnrollmentDto) {
        return this.enrollmentService.updateFull(id, createEnrollmentDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete an enrollment' })
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.enrollmentService.remove(id);
    }
}

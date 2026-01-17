import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { CycleService } from './cycle.service';
import { CreateCycleDto } from './dto/create-cycle.dto';
import { UpdateCycleDto } from './dto/update-cycle.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Academic - Cycles')
@Controller('academic/cycles')
export class CycleController {
    constructor(private readonly cycleService: CycleService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new cycle' })
    create(@Body() createCycleDto: CreateCycleDto) {
        return this.cycleService.create(createCycleDto);
    }

    @Get()
    @ApiOperation({ summary: 'List all cycles' })
    findAll() {
        return this.cycleService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a cycle by ID' })
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.cycleService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update a cycle (Partial)' })
    update(@Param('id', ParseIntPipe) id: number, @Body() updateCycleDto: UpdateCycleDto) {
        return this.cycleService.update(id, updateCycleDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a cycle (Full)' })
    updateFull(@Param('id', ParseIntPipe) id: number, @Body() createCycleDto: CreateCycleDto) {
        return this.cycleService.updateFull(id, createCycleDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a cycle' })
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.cycleService.remove(id);
    }
}

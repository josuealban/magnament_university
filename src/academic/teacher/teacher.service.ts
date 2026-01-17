import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { AcademicDataService } from '../academic-data.service';

import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Injectable()
export class TeacherService {
    constructor(private readonly dataService: AcademicDataService) { }

    async create(createTeacherDto: CreateTeacherDto) {
        const existingEmail = await this.dataService.teacher.findUnique({
            where: { email: createTeacherDto.email },
        });

        if (existingEmail) {
            throw new ConflictException(`Teacher with email ${createTeacherDto.email} already exists`);
        }

        const existingUser = await this.dataService.teacher.findUnique({
            where: { userId: createTeacherDto.userId },
        });

        if (existingUser) {
            throw new ConflictException(`Teacher with userId ${createTeacherDto.userId} already exists`);
        }

        return this.dataService.teacher.create({
            data: createTeacherDto,
        });
    }

    async findAll() {
        return this.dataService.teacher.findMany({
            include: { subjects: { include: { subject: true } } },
        });
    }

    async findOne(id: number) {
        const teacher = await this.dataService.teacher.findUnique({
            where: { id },
            include: { subjects: { include: { subject: true } } },
        });

        if (!teacher) {
            throw new NotFoundException(`Teacher with ID ${id} not found`);
        }

        return teacher;
    }

    async update(id: number, updateTeacherDto: UpdateTeacherDto) {
        await this.findOne(id);

        if (updateTeacherDto.email) {
            const existing = await this.dataService.teacher.findFirst({
                where: {
                    email: updateTeacherDto.email,
                    id: { not: id }
                },
            });

            if (existing) {
                throw new ConflictException(`Teacher with email ${updateTeacherDto.email} already exists`);
            }
        }

        if (updateTeacherDto.userId) {
            const existing = await this.dataService.teacher.findFirst({
                where: {
                    userId: updateTeacherDto.userId,
                    id: { not: id }
                },
            });

            if (existing) {
                throw new ConflictException(`Teacher with userId ${updateTeacherDto.userId} already exists`);
            }
        }

        return this.dataService.teacher.update({
            where: { id },
            data: updateTeacherDto,
        });
    }

    async updateFull(id: number, createTeacherDto: CreateTeacherDto) {
        return this.update(id, createTeacherDto);
    }

    async remove(id: number) {
        await this.findOne(id);
        return this.dataService.teacher.delete({
            where: { id },
        });
    }

    // --- ACTIVIDAD PRÁCTICA ---

    // Parte 1: Docentes que imparten más de una asignatura
    async findMultiSubjectTeachers() {
        // Since Prisma doesn't directly support having > 1 on counts in 'where' easily for relations in older versions,
        // we use 'some' and then filter in JS or use a slightly more complex query if possible.
        // Actually, for this task, filtering in the service is acceptable if direct ORM query is tricky.
        // However, we can use findMany and then filter.
        const teachers = await this.dataService.teacher.findMany({
            include: { _count: { select: { subjects: true } } }
        });
        return teachers.filter(t => t._count.subjects > 1);
    }

    // Parte 2: Operaciones lógicas (Tiempo completo AND (Dictan asignaturas OR NOT inactivos))
    async filterAdvanced() {
        return this.dataService.teacher.findMany({
            where: {
                AND: [
                    { employmentType: 'FULL_TIME' },
                    {
                        OR: [
                            { subjects: { some: {} } },
                            { isActive: { not: false } }
                        ]
                    }
                ]
            },
            include: { subjects: true }
        });
    }
}

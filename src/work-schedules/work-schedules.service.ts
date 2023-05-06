import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class WorkSchedulesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.work_Schedule.findMany();
  }

  findOne(id: number) {
    return this.prisma.work_Schedule.findUnique({
      where: { id_work_schedule: id },
    });
  }
}

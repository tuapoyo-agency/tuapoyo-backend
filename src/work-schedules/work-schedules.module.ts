import { Module } from '@nestjs/common';
import { WorkSchedulesService } from './work-schedules.service';
import { WorkSchedulesController } from './work-schedules.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [WorkSchedulesController],
  providers: [WorkSchedulesService, PrismaService],
})
export class WorkSchedulesModule {}

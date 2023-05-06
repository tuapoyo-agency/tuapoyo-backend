import { Module } from '@nestjs/common';
import { MaritalStatusService } from './marital-status.service';
import { MaritalStatusController } from './marital-status.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MaritalStatusController],
  providers: [MaritalStatusService, PrismaService],
})
export class MaritalStatusModule {}

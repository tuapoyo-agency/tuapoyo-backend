import { Module } from '@nestjs/common';
import { ApplicantStatusService } from './applicant-status.service';
import { ApplicantStatusController } from './applicant-status.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ApplicantStatusController],
  providers: [ApplicantStatusService, PrismaService],
})
export class ApplicantStatusModule {}

import { Module } from '@nestjs/common';
import { CandidatesService } from './candidates.service';
import { CandidatesController } from './candidates.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CandidatesController],
  providers: [CandidatesService, PrismaService],
})
export class CandidatesModule {}

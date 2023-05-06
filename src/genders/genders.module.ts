import { Module } from '@nestjs/common';
import { GendersService } from './genders.service';
import { GendersController } from './genders.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [GendersController],
  providers: [GendersService, PrismaService],
})
export class GendersModule {}

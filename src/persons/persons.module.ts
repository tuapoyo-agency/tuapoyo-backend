import { Module } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { PersonsController } from './persons.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PersonsController],
  providers: [PersonsService, PrismaService],
})
export class PersonsModule {}

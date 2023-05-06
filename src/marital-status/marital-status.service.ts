import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MaritalStatusService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.marital_Status.findMany();
  }

  findOne(id: number) {
    return this.prisma.marital_Status.findUnique({
      where: { id_marital_status: id },
    });
  }
}

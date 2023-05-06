import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GendersService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.gender.findMany();
  }

  findOne(id: number) {
    return this.prisma.gender.findUnique({
      where: { id_gender: id },
    });
  }
}

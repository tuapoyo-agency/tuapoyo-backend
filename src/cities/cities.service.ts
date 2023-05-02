import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { City } from '@prisma/client';

@Injectable()
export class CitiesService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<City[]> {
    return this.prisma.city.findMany();
  }

  findOne(id: number) {
    return this.prisma.city.findUnique({
      where: { id_city: id },
    });
  }
}

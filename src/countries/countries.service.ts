import { Injectable } from '@nestjs/common';
import { Country } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CountriesService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Country[]> {
    return this.prisma.country.findMany();
  }

  findOne(id: number) {
    return this.prisma.country.findUnique({
      where: { id_country: id },
    });
  }

  findCities(id: number) {
    return this.prisma.country.findUnique({
      where: { id_country: id },
      include: {
        cities: true,
      },
    });
  }
}

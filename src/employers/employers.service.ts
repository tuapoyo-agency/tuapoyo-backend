import { Injectable } from '@nestjs/common';
import { CreateEmployerDto } from './dto/create-employer.dto';
import { UpdateEmployerDto } from './dto/update-employer.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EmployersService {
  constructor(private prisma: PrismaService) {}

  create(createEmployerDto: CreateEmployerDto) {
    return this.prisma.employer.create({
      data: {
        person: {
          connect: {
            id_person: createEmployerDto.idPerson,
          },
        },
        date_added: new Date(),
        date_modified: new Date(),
      },
    });
  }

  findAll() {
    return this.prisma.employer.findMany();
  }

  findOne(id: number) {
    return this.prisma.employer.findUnique({
      where: { id_employer: id },
    });
  }

  update(id: number, updateEmployerDto: UpdateEmployerDto) {
    return this.prisma.employer.update({
      where: { id_employer: id },
      data: {
        id_person: updateEmployerDto.idPerson,
        date_modified: new Date(),
      },
    });
  }

  remove(id: number) {
    //TODO: Maybe we should set the person`to inactive
    return `This action removes a #${id} employer`;
  }
}

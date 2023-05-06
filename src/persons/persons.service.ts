import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PersonsService {
  constructor(private prisma: PrismaService) {}

  create(createPersonDto: CreatePersonDto) {
    return this.prisma.person.create({
      data: {
        first_name: createPersonDto.firstName,
        last_name: createPersonDto.lastName,
        dpi: BigInt(createPersonDto.dpi),
        phone: createPersonDto.phone,
        email: createPersonDto.email,
        profilePic: createPersonDto.profilePic,
        gender: {
          connect: {
            id_gender: createPersonDto.genderId,
          },
        },
        active: 1,
        date_added: new Date(),
        date_modified: new Date(),
      },
    });
  }

  findAll() {
    return this.prisma.person.findMany();
  }

  findOne(id: number) {
    return this.prisma.person.findUnique({
      where: { id_person: id },
    });
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return this.prisma.person.update({
      where: { id_person: id },
      data: {
        first_name: updatePersonDto.firstName,
        last_name: updatePersonDto.lastName,
        dpi: BigInt(updatePersonDto.dpi),
        phone: updatePersonDto.phone,
        email: updatePersonDto.email,
        profilePic: updatePersonDto.profilePic,
        id_gender: updatePersonDto.genderId,
        date_modified: new Date(),
      },
    });
  }

  remove(id: number) {
    return this.prisma.person.update({
      where: { id_person: id },
      data: {
        active: 0,
      },
    });
  }
}

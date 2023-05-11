import { Injectable } from '@nestjs/common';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { PrismaService } from 'src/prisma.service';
import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';

@Injectable()
export class CandidatesService {
  constructor(private prisma: PrismaService) {
    dayjs.extend(customParseFormat);
  }

  create(createCandidateDto: CreateCandidateDto) {
    const birthdate = dayjs(
      createCandidateDto.birthDate,
      'YYYY-MM-DD',
    ).toDate();
    return this.prisma.candidate.create({
      data: {
        person: {
          connect: {
            id_person: createCandidateDto.idPerson,
          },
        },
        birthdate,
        city_born: {
          connect: {
            id_city: createCandidateDto.idCityBorn,
          },
        },
        city_live: {
          connect: {
            id_city: createCandidateDto.idCityLive,
          },
        },
        address: createCandidateDto.address,
        latitude: createCandidateDto.latitude,
        longitude: createCandidateDto.longitude,
        marital_status: {
          connect: {
            id_marital_status: createCandidateDto.idMaritalStatus,
          },
        },
        work_schedule: {
          connect: {
            id_work_schedule: createCandidateDto.idWorkSchedule,
          },
        },
        children_no: createCandidateDto.childrenNo,
        children_description: createCandidateDto.childrenDescription,
        can_read: createCandidateDto.canRead,
        can_write: createCandidateDto.canWrite,
        yoe: createCandidateDto.yoe,
        yoe_description: createCandidateDto.yoeDescription,
        cook_level: createCandidateDto.cookLevel,
        hand_wash: createCandidateDto.handWash,
        washing_machine: createCandidateDto.washingMachine,
        iron: createCandidateDto.iron,
        stove: createCandidateDto.stove,
        coffee_maker: createCandidateDto.coffeeMaker,
        microwave: createCandidateDto.microwave,
        blender: createCandidateDto.blender,
        children_care_experience: createCandidateDto.childrenCareExperience,
        children_care_description: createCandidateDto.childrenCareDescription,
        tattoos: createCandidateDto.tattoos,
        pregnant: createCandidateDto.pregnant,
        disability: createCandidateDto.disability,
        disability_description: createCandidateDto.disabilityDescription,
        pet_care: createCandidateDto.petCare,
        uniform: createCandidateDto.uniform,
        availability: createCandidateDto.availability,
        expected_salary: createCandidateDto.expectedSalary,
        date_added: new Date(),
        date_modified: new Date(),
      },
    });
  }

  findAll() {
    return this.prisma.candidate.findMany();
  }

  findOne(id: number) {
    return this.prisma.candidate.findUnique({
      where: { id_candidate: id },
    });
  }

  update(id: number, updateCandidateDto: UpdateCandidateDto) {
    const birthdate =
      updateCandidateDto.birthDate &&
      dayjs(updateCandidateDto.birthDate, 'MM-DD-YYYY').toDate();
    return this.prisma.candidate.update({
      where: { id_candidate: id },
      data: {
        birthdate,
        id_city_born: updateCandidateDto.idCityBorn,
        id_city_live: updateCandidateDto.idCityLive,
        address: updateCandidateDto.address,
        latitude: updateCandidateDto.latitude,
        longitude: updateCandidateDto.longitude,
        id_marital_status: updateCandidateDto.idMaritalStatus,
        id_work_schedule: updateCandidateDto.idWorkSchedule,
        children_no: updateCandidateDto.childrenNo,
        children_description: updateCandidateDto.childrenDescription,
        can_read: updateCandidateDto.canRead,
        can_write: updateCandidateDto.canWrite,
        yoe: updateCandidateDto.yoe,
        yoe_description: updateCandidateDto.yoeDescription,
        cook_level: updateCandidateDto.cookLevel,
        hand_wash: updateCandidateDto.handWash,
        washing_machine: updateCandidateDto.washingMachine,
        iron: updateCandidateDto.iron,
        stove: updateCandidateDto.stove,
        coffee_maker: updateCandidateDto.coffeeMaker,
        microwave: updateCandidateDto.microwave,
        blender: updateCandidateDto.blender,
        children_care_experience: updateCandidateDto.childrenCareExperience,
        children_care_description: updateCandidateDto.childrenCareDescription,
        tattoos: updateCandidateDto.tattoos,
        pregnant: updateCandidateDto.pregnant,
        disability: updateCandidateDto.disability,
        disability_description: updateCandidateDto.disabilityDescription,
        pet_care: updateCandidateDto.petCare,
        uniform: updateCandidateDto.uniform,
        availability: updateCandidateDto.availability,
        expected_salary: updateCandidateDto.expectedSalary,
        date_modified: new Date(),
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} candidate`;
  }
}

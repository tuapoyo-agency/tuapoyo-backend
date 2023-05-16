import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class JobsService {
  constructor(private prisma: PrismaService) {}

  create(createJobDto: CreateJobDto) {
    return this.prisma.job.create({
      data: {
        employer: {
          connect: {
            id_employer: createJobDto.idEmployer,
          },
        },
        city: {
          connect: {
            id_city: createJobDto.idCity,
          },
        },
        address: createJobDto.address,
        latitude: createJobDto.latitude,
        longitude: createJobDto.longitude,
        work_schedule: {
          connect: {
            id_work_schedule: createJobDto.idWorkSchedule,
          },
        },
        children_care: createJobDto.childrenCare,
        pet_care: createJobDto.petCare,
        min_salary: createJobDto.minSalary,
        max_salary: createJobDto.maxSalary,
        job_description: createJobDto.description,
        date_added: new Date(),
        date_modified: new Date(),
      },
    });
  }

  findAll() {
    return this.prisma.job.findMany();
  }

  findOne(id: number) {
    return this.prisma.job.findUnique({
      where: { id_job: id },
    });
  }

  update(id: number, updateJobDto: UpdateJobDto) {
    return this.prisma.job.update({
      where: { id_job: id },
      data: {
        id_city: updateJobDto.idCity,
        address: updateJobDto.address,
        latitude: updateJobDto.latitude,
        longitude: updateJobDto.longitude,
        id_work_schedule: updateJobDto.idWorkSchedule,
        children_care: updateJobDto.childrenCare,
        pet_care: updateJobDto.petCare,
        min_salary: updateJobDto.minSalary,
        max_salary: updateJobDto.maxSalary,
        job_description: updateJobDto.description,
        date_modified: new Date(),
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} job`;
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ApplicantStatusService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.applicant_Status.findMany();
  }

  findOne(id: number) {
    return this.prisma.applicant_Status.findUnique({
      where: { id_applicant_status: id },
    });
  }
}

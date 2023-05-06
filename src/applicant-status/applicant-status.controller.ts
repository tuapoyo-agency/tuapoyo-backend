import { Controller, Get, Param } from '@nestjs/common';
import { ApplicantStatusService } from './applicant-status.service';

@Controller('applicant-status')
export class ApplicantStatusController {
  constructor(
    private readonly applicantStatusService: ApplicantStatusService,
  ) {}

  @Get()
  findAll() {
    return this.applicantStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicantStatusService.findOne(+id);
  }
}

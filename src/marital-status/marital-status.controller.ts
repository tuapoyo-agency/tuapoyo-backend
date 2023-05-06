import { Controller, Get, Param } from '@nestjs/common';
import { MaritalStatusService } from './marital-status.service';

@Controller('marital-status')
export class MaritalStatusController {
  constructor(private readonly maritalStatusService: MaritalStatusService) {}

  @Get()
  findAll() {
    return this.maritalStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.maritalStatusService.findOne(+id);
  }
}

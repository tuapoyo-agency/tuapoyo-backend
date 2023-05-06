import { Controller, Get, Param } from '@nestjs/common';
import { WorkSchedulesService } from './work-schedules.service';

@Controller('work-schedules')
export class WorkSchedulesController {
  constructor(private readonly workSchedulesService: WorkSchedulesService) {}

  @Get()
  findAll() {
    return this.workSchedulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workSchedulesService.findOne(+id);
  }
}

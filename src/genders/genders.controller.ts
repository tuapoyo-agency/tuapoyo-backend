import { Controller, Get, Param } from '@nestjs/common';
import { GendersService } from './genders.service';

@Controller('genders')
export class GendersController {
  constructor(private readonly gendersService: GendersService) {}

  @Get()
  findAll() {
    return this.gendersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gendersService.findOne(+id);
  }
}

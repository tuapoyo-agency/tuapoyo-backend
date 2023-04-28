import { Controller, Get, Req } from '@nestjs/common';

@Controller('jobs')
export class JobsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all jobs';
  }
}

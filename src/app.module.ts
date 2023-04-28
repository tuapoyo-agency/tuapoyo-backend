import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsController } from './jobs/jobs.controller';
import { PersonsController } from './persons/persons.controller';
import { EmployeeController } from './employee/employee.controller';
import { EmployeerController } from './employeer/employeer.controller';
import { ContractsController } from './contracts/contracts.controller';
import { MessagesController } from './messages/messages.controller';

@Module({
  imports: [],
  controllers: [AppController, JobsController, PersonsController, EmployeeController, EmployeerController, ContractsController, MessagesController],
  providers: [AppService],
})
export class AppModule {}

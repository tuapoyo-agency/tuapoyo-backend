import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsController } from './jobs/jobs.controller';
import { ContractsController } from './contracts/contracts.controller';
import { MessagesController } from './messages/messages.controller';
import { CandidateController } from './candidate/candidate.controller';
import { EmployerController } from './employer/employer.controller';
import { PersonsModule } from './persons/persons.module';
import { CountriesModule } from './countries/countries.module';
import { CitiesModule } from './cities/cities.module';

@Module({
  imports: [PersonsModule, CountriesModule, CitiesModule],
  controllers: [
    AppController,
    JobsController,
    ContractsController,
    MessagesController,
    CandidateController,
    EmployerController,
  ],
  providers: [AppService],
})
export class AppModule {}

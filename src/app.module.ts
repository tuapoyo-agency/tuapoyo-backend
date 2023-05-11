import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonsModule } from './persons/persons.module';
import { CountriesModule } from './countries/countries.module';
import { CitiesModule } from './cities/cities.module';
import { GendersModule } from './genders/genders.module';
import { MaritalStatusModule } from './marital-status/marital-status.module';
import { WorkSchedulesModule } from './work-schedules/work-schedules.module';
import { ApplicantStatusModule } from './applicant-status/applicant-status.module';
import { EmployersModule } from './employers/employers.module';
import { CandidatesModule } from './candidates/candidates.module';

@Module({
  imports: [
    PersonsModule,
    CountriesModule,
    CitiesModule,
    GendersModule,
    MaritalStatusModule,
    WorkSchedulesModule,
    ApplicantStatusModule,
    EmployersModule,
    CandidatesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

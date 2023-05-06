import { Test, TestingModule } from '@nestjs/testing';
import { ApplicantStatusService } from './applicant-status.service';

describe('ApplicantStatusService', () => {
  let service: ApplicantStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplicantStatusService],
    }).compile();

    service = module.get<ApplicantStatusService>(ApplicantStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

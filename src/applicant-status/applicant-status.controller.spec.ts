import { Test, TestingModule } from '@nestjs/testing';
import { ApplicantStatusController } from './applicant-status.controller';
import { ApplicantStatusService } from './applicant-status.service';

describe('ApplicantStatusController', () => {
  let controller: ApplicantStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApplicantStatusController],
      providers: [ApplicantStatusService],
    }).compile();

    controller = module.get<ApplicantStatusController>(ApplicantStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { EmployeerController } from './employeer.controller';

describe('EmployeerController', () => {
  let controller: EmployeerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeerController],
    }).compile();

    controller = module.get<EmployeerController>(EmployeerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

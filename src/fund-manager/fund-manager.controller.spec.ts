import { Test, TestingModule } from '@nestjs/testing';
import { FundManagerController } from './fund-manager.controller';
import { FundManagerService } from './fund-manager.service';

describe('FundManagerController', () => {
  let controller: FundManagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FundManagerController],
      providers: [FundManagerService],
    }).compile();

    controller = module.get<FundManagerController>(FundManagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

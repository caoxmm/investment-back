import { Test, TestingModule } from '@nestjs/testing';
import { LofFundController } from './lof-fund.controller';
import { LofFundService } from './lof-fund.service';

describe('LofFundController', () => {
  let controller: LofFundController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LofFundController],
      providers: [LofFundService],
    }).compile();

    controller = module.get<LofFundController>(LofFundController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

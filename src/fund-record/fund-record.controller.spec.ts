import { Test, TestingModule } from '@nestjs/testing';
import { FundRecordController } from './fund-record.controller';
import { FundRecordService } from './fund-record.service';

describe('FundRecordController', () => {
  let controller: FundRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FundRecordController],
      providers: [FundRecordService],
    }).compile();

    controller = module.get<FundRecordController>(FundRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

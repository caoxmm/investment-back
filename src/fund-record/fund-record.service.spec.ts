import { Test, TestingModule } from '@nestjs/testing';
import { FundRecordService } from './fund-record.service';

describe('FundRecordService', () => {
  let service: FundRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FundRecordService],
    }).compile();

    service = module.get<FundRecordService>(FundRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { FundManagerService } from './fund-manager.service';

describe('FundManagerService', () => {
  let service: FundManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FundManagerService],
    }).compile();

    service = module.get<FundManagerService>(FundManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

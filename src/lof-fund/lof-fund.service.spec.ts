import { Test, TestingModule } from '@nestjs/testing';
import { LofFundService } from './lof-fund.service';

describe('LofFundService', () => {
  let service: LofFundService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LofFundService],
    }).compile();

    service = module.get<LofFundService>(LofFundService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { MyFundService } from './my-fund.service';

describe('MyFundService', () => {
  let service: MyFundService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyFundService],
    }).compile();

    service = module.get<MyFundService>(MyFundService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

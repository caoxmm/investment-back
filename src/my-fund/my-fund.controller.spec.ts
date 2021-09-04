import { Test, TestingModule } from '@nestjs/testing';
import { MyFundController } from './my-fund.controller';
import { MyFundService } from './my-fund.service';

describe('MyFundController', () => {
  let controller: MyFundController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyFundController],
      providers: [MyFundService],
    }).compile();

    controller = module.get<MyFundController>(MyFundController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

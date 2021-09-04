import { Test, TestingModule } from '@nestjs/testing';
import { StockRecordController } from './stock-record.controller';
import { StockRecordService } from './stock-record.service';

describe('StockRecordController', () => {
  let controller: StockRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockRecordController],
      providers: [StockRecordService],
    }).compile();

    controller = module.get<StockRecordController>(StockRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

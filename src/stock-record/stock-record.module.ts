import { Module } from '@nestjs/common';
import { StockRecordService } from './stock-record.service';
import { StockRecordController } from './stock-record.controller';

@Module({
  controllers: [StockRecordController],
  providers: [StockRecordService]
})
export class StockRecordModule {}

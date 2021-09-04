import { Module } from '@nestjs/common';
import { FundRecordService } from './fund-record.service';
import { FundRecordController } from './fund-record.controller';

@Module({
  controllers: [FundRecordController],
  providers: [FundRecordService]
})
export class FundRecordModule {}

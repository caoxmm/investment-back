import { Module } from '@nestjs/common';
import { MyFundService } from './my-fund.service';
import { MyFundController } from './my-fund.controller';
import { DatabaseModule } from '../database/database.module';
import { myFundProviders } from './my-fund.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [MyFundController],
  providers: [MyFundService, ...myFundProviders],
})
export class MyFundModule {}

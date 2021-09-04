import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FundManagerModule } from './fund-manager/fund-manager.module';
import { FundModule } from './fund/fund.module';
import { FundRecordModule } from './fund-record/fund-record.module';
import { StockRecordModule } from './stock-record/stock-record.module';
import { AssetModule } from './asset/asset.module';
import { MyFundModule } from './my-fund/my-fund.module';
import { LofFundModule } from './lof-fund/lof-fund.module';
// import { UsersModule } from './users/users.module';
// import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    FundManagerModule,
    FundModule,
    FundRecordModule,
    StockRecordModule,
    AssetModule,
    MyFundModule,
    LofFundModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

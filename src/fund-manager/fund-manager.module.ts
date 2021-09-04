import { Module } from '@nestjs/common';
import { FundManagerService } from './fund-manager.service';
import { FundManagerController } from './fund-manager.controller';
import { DatabaseModule } from '../database/database.module';
import { fundManagersProviders } from './fund-manager.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [FundManagerController],
  providers: [FundManagerService, ...fundManagersProviders],
})
export class FundManagerModule {}

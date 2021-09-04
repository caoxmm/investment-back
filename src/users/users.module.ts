import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { userProviders } from './user.provider';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ...userProviders],
})
export class UsersModule {}

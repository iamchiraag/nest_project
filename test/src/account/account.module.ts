import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';



@Module({
    // imports: [ Module],
  controllers: [AccountController],
  providers: [AccountService],
  imports: [AccountModule],
})
export class AccountModule {}
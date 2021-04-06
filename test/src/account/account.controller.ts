import { Controller, Get } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {


    constructor(private readonly AccountService: AccountService) {}

  @Get()
  getHello(): string {
    return this.AccountService.getHello();
  }
}


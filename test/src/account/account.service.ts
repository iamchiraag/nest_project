import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
  getHello(): any {
    return "this is me";
  }
}

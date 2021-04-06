import { Injectable } from '@nestjs/common';

@Injectable()
export class SalesService {
  getHello(): any {
    return "this is me";
  }
}

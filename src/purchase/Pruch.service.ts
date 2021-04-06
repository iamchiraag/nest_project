import { Injectable } from '@nestjs/common';

@Injectable()
export class PurchService {
  getHello(): any {
    return "this is me";
  }
}

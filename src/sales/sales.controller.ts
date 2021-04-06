import { Controller, Get } from '@nestjs/common';
import { SalesService } from './sales.service';

@Controller('sales')
export class SalesController {

    constructor(private readonly SalesService: SalesService) {}

  @Get()
  getHello(): string {
    return this.SalesService.getHello();
  }
}

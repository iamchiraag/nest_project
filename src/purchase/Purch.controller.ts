import { Controller, Get } from '@nestjs/common';
import { PurchService } from './Pruch.service';


@Controller('purchase')
export class PurchController {
  constructor(private readonly PurchService: PurchService) {}

  @Get()
  getHello(): string {
    return this.PurchService.getHello();
  }
}
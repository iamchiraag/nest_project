import { Controller, Get, Body, Post } from '@nestjs/common';
import { p_OrderService } from './p-order.service';
import { porderDto } from './p-order.dto';





@Controller('porder')
export class PorderController {
    constructor(private readonly p_OrderService: p_OrderService) {} 

    @Get('/create')
    async Prod_Create(@Body() porderDto:porderDto) {
      const create = await this.p_OrderService.getOrderNum(porderDto);
      return 'succesfully done';
    }

    @Get('/all')
    async Prod_All() {
      
        const all = await this.p_OrderService.Porder_All();
        return all;

    }
  }

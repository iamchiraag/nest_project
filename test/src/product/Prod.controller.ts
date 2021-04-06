import { Controller, Post, Body, Get, Param, Delete, Render } from '@nestjs/common';
import { prod_Dto } from './dto/Prod.dto';
import { Krishna } from './interfaces/prod.interface';
import { Prod_Service } from './Prod.service';

@Controller('product')
export class Prod_Controller {

    constructor(private readonly appService: Prod_Service) {}

    @Post('/create')
    async Prod_Create(@Body() prod_Dto: prod_Dto) {
      const create = await this.appService.Prod_Create(prod_Dto);
      return "succesfully Submitted";
    }

    
    @Get('/all')
    async Prod_All() {
      
        const all = await this.appService.Prod_All();
        return all;

    }
    @Get(':id')
    findOne(@Param('id') id): Promise<Krishna> {
      return this.appService.findOne(id);
    }
  
   
    @Delete(':id')
    delete(@Param('id') id): Promise<Krishna> {
      return this.appService.delete(id);
    }
  
  

}

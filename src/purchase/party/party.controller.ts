import { Body, Controller, Get, Post } from '@nestjs/common';
import { partyDto } from './party.dto';
import { PartyService } from './party.service';

@Controller('party')
export class PartyController {
    constructor(private readonly PartyService: PartyService) {}

    @Post('/create')
    async Prod_Create(@Body() partyDto: partyDto) {
      const create = await this.PartyService.Prod_Create(partyDto);
      return "succesfully Submitted";
    }

    @Get('/all')
    async Prod_All() {
      
        const all = await this.PartyService.Prod_All();
        return all;

    }

}

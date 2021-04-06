import { Module } from '@nestjs/common';
import { PurchController } from './Purch.controller';
import { PurchService } from './Pruch.service';

import { PartyModule } from './party/party.module';
import { POrderModule } from './p-order/p-order.module';


@Module({
    imports: [ PartyModule,POrderModule],
  controllers: [PurchController],
  providers: [PurchService],
})
export class Purch_Module {}

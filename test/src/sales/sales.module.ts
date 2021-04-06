import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';

import { PartyModule } from './party/sparty.module';


@Module({
    // imports: [ Module],
  controllers: [SalesController],
  providers: [SalesService],
  imports: [PartyModule],
})
export class SalesModule {}
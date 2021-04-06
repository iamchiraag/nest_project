import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PorderController } from './p-order.controller';
import { p_orderSchema } from './p-order.schema';

import { p_OrderService } from './p-order.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'purchase_order', schema: p_orderSchema }])
  ],
  controllers: [PorderController],
  providers: [p_OrderService]
})
export class POrderModule {}

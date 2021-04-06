import { Module } from '@nestjs/common';
import {  Prod_Controller } from './Prod.controller';
import { Prod_Service } from './Prod.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Prod_Schema } from './schemas/prod.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'product', schema: Prod_Schema }])
  ],
  controllers: [Prod_Controller],
  providers: [Prod_Service]
})
export class Prod_Module {}

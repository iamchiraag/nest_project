import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { porderDto } from './p-order.dto';
import { p_order } from './p-order.interface';

@Injectable()
export class p_OrderService {
  constructor(
    @InjectModel('purchase_order') private readonly recipeModel: Model<p_order>,
  ) {}
  async Porder_Create(porderDto: porderDto): Promise<p_order> {
    const newRecipe = await new this.recipeModel(porderDto);
    // var datetime = new Date();
    return newRecipe.save();
  }

  async Porder_All(): Promise<p_order[]> {
    const recipes = await this.recipeModel.find().exec();
    return recipes;
  }

  count: number = 0;
  async getOrderNum(porderDto: porderDto) {
    let date: Date = new Date();
    var orderId = Math.floor(Math.random() * Math.floor(1000)).toString();
    this.count++;

    porderDto.order_date = date.toString();
    porderDto.order_id = orderId;
    porderDto.order_no = this.count;

    const newPurchaseOrder = new this.recipeModel(porderDto);

    const result = await newPurchaseOrder.save();

    return result;
  }
}

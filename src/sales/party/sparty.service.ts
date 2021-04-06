import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Schitthi } from './sparty.interface';
import { partyDto } from './sparty.dto';

@Injectable()
export class PartyService {
  constructor(
    @InjectModel('Sparty') private readonly recipeModel: Model<Schitthi>,
  ) {}

  async Prod_Create(partyDto: partyDto): Promise<Schitthi> {
    const newRecipe = await new this.recipeModel(partyDto);
    return newRecipe.save();
  }

  async Prod_All(): Promise<Schitthi[]> {
    const recipes = await this.recipeModel.find().exec();
    return recipes;
  }

  // count: number = 0;
  // async getOrderNum(partyDto: partyDto) {
  //   let date: Date = new Date();
  //   var orderId = Math.floor(Math.random() * Math.floor(1000)).toString();
  //   this.count++;

  //   partyDto.order_date = date.toString();
  //   partyDto.order_id = orderId;
  //   partyDto.order_no = this.count;

  //   const newPurchaseOrder = new this.recipeModel(partyDto);

  //   const result = await newPurchaseOrder.save();

  //   return result;
  // }
}

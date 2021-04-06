import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { prod_Dto } from './dto/Prod.dto';
import { Krishna } from './interfaces/prod.interface';

@Injectable()
export class Prod_Service {
  constructor(
    @InjectModel('product') private readonly recipeModel: Model<Krishna>,
  ) {}

  async Prod_Create(prod_Dto: prod_Dto): Promise<Krishna> {
    const newRecipe = await new this.recipeModel(prod_Dto);
    return newRecipe.save();
  }

  async Prod_All(): Promise<Krishna[]> {
    const recipes = await this.recipeModel.find().populate('catId').exec();
    return recipes;
  }

  async findOne(id: string): Promise<Krishna> {
    return await this.recipeModel.findOne({ _id: id });
  }

  async delete(id: string): Promise<Krishna> {
    return await this.recipeModel.findByIdAndRemove(id);
  }

  async update(id: string, Krishna: Krishna): Promise<Krishna> {
    return await this.recipeModel.findByIdAndUpdate(id, Krishna, { new: true });
  }
}

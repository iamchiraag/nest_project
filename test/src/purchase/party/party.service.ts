import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { chitthi } from './party.interface';
import { partyDto } from './party.dto';

@Injectable()
export class PartyService {
  constructor(
    @InjectModel('party') private readonly recipeModel: Model<chitthi>,
  ) {}

  async Prod_Create(partyDto: partyDto): Promise<chitthi> {
    const newRecipe = await new this.recipeModel(partyDto);
    return newRecipe.save();
  }

  async Prod_All(): Promise<chitthi[]> {
    const recipes = await this.recipeModel.find().exec();
    return recipes;
  }
  // abc():string{

  //   return "hjdsa";
  // }
}

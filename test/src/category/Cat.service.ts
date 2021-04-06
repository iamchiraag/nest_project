import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { cat_in } from './interfaces/Cat.interface';
import { CreateCategoryDTO } from './dto/Cat_Dto';

@Injectable()
export class categoryService {
  constructor(
    @InjectModel('category') private readonly recipeModel: Model<cat_in>,
  ) {}

  async addHntechno(CreateCategoryDTO: CreateCategoryDTO): Promise<String> {
    const newRecipe = await new this.recipeModel(CreateCategoryDTO).save();
    return 'successful Submitted';
  }

  async getAllRecipes(): Promise<cat_in[]> {
    const recipes = await this.recipeModel.find().exec();
    return recipes;
  }

  async findOne(id: string): Promise<cat_in> {
    return await this.recipeModel.findOne({ _id: id });
  }

  async delete(id: string): Promise<cat_in> {
    return await this.recipeModel.findByIdAndRemove(id);
  }

  async update(id: string, cat_in: cat_in): Promise<cat_in> {
    return await this.recipeModel.findByIdAndUpdate(id, cat_in, { new: true });
  }
  
}

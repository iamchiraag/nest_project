import { Injectable, NotFoundException, Param } from '@nestjs/common';
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
  async getone(Id: String): Promise<cat_in> {
    var cat = await this.recipeModel.findById(Id);
    if (!cat) {
      throw new NotFoundException('CAtegory model object not found!!');
    }

    return cat;
  }
  async insertCategory(catDto: CreateCategoryDTO) {
    // var prodId = Math.random().toString();
    const newProducts = new this.recipeModel(catDto);
    const result = await newProducts.save();
    return 'success';
  }

  async Updatecat(CreateCategoryDTO: CreateCategoryDTO,@Param('id') Id: String,) {
    var catup = await this.getone(Id);

    if (catup.title) {
      catup.title = CreateCategoryDTO.title;
    }
    if (catup.description) {
      catup.description = CreateCategoryDTO.description;
    }
    catup.save();

    return catup;
  }
  // async update(id: string, cat_in: cat_in): Promise<cat_in> {
  //   return await this.recipeModel.findByIdAndUpdate(id, cat_in, { new: true });
  // }
  
  async updateCustomer(customerID:String, CreateCategoryDTO: CreateCategoryDTO): Promise<cat_in> {
    const updatedCustomer = await this.recipeModel
        .findByIdAndUpdate(customerID, CreateCategoryDTO, { new: true });
    return updatedCustomer;
}
}

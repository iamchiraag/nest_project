import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
 
} from '@nestjs/common';

import { categoryService } from './Cat.service';
import { CreateCategoryDTO } from './dto/Cat_Dto';
import { cat_in } from './interfaces/Cat.interface';
import { storage } from '../signup/storage.config';

@Controller('category')
export class categoryController {
  constructor(private readonly categoryService: categoryService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async addRecipe(@Body() CreateCategoryDTO: CreateCategoryDTO) {
    const recipe = await this.categoryService.addHntechno(CreateCategoryDTO);
    return recipe;
  }

  @Get('/all')
  async getRecipes() {
    const allRecipes = await this.categoryService.getAllRecipes();
    return allRecipes;
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<cat_in> {
    return this.categoryService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<cat_in> {
    return this.categoryService.delete(id);
  }

  
}

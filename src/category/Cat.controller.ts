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
  Patch,
  NotFoundException,
  Query,
  Res,
  HttpStatus,
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
  async addRecipe(
    @Body() CreateCategoryDTO: CreateCategoryDTO,
    @Param('id') Id: String,
  ) {
    const ID = await this.categoryService.insertCategory(CreateCategoryDTO);
    return { id: ID };
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

  // @Put(':id')
  // update(@Param('id') id,@Body() updateItemDto: CreateCategoryDTO): Promise<cat_in> {
  //   return this.categoryService.update(id,updateItemDto);
  // }
  @Put('/update')
    async updateCustomer(@Res() res, @Query('customerID') customerID, @Body() CreateCategoryDTO: CreateCategoryDTO) {
        const customer = await this.categoryService.updateCustomer(customerID, CreateCategoryDTO);
        // if (!customer) throw new NotFoundException('Customer does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Customer has been successfully updated',
            customer
        });
    }

  
}

import { Module } from '@nestjs/common';
import { categoryController } from './Cat.controller';
import { categoryService } from './Cat.service';
import { MongooseModule } from '@nestjs/mongoose';
import { categorySchema} from './schemas/Cat.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'category', schema: categorySchema }])
  ],
  controllers: [categoryController],
  providers: [categoryService]
})
export class Cat_Model {}

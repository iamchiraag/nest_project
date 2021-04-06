import { IsNotEmpty } from 'class-validator';

export class CreateCategoryDTO {


    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;
  }
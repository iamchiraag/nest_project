import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { signupDto } from './signup.dto';
import { SignupService } from './signup.service';

import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { storage } from './storage.config';
import { sign_in } from './signup.interface';
import { diskStorage } from 'multer';
import { strict } from 'node:assert';

@Controller('signup')
export class SignupController {
  constructor(private readonly SignupService: SignupService) {}

  @Post('/abc')
  @UseInterceptors(FileInterceptor('img', { storage }))
  async uploadedFile(signupDto,@UploadedFile() file) {
    // signupDto.img = file.path;
    const create = await this.SignupService.signup_Create(signupDto);
    return create;
    
  }

  @Post('/create')
  @UseInterceptors(FileInterceptor('img', { storage }))
  async upload(@UploadedFile() file, @Body() signupDto: signupDto) {
    // const response = {
    //   originalname: file.originalname,
    //   filename: file.filename,
    // };
    // await file.path.save()
    const create = await this.SignupService.signup_Create(signupDto);
    return create;
  }

  @Get('/all')
  async Prod_All() {
    const all = await this.SignupService.signup_All();
    return all;
  }
  @Get(':id')
  findOne(@Param('id') id): Promise<sign_in> {
    return this.SignupService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<sign_in> {
    return this.SignupService.delete(id);
  }
  @Get('/imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './uploads' });
  }
  
  
}

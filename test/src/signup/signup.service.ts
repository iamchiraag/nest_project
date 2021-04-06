import { Injectable, UploadedFile } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { sign_in } from './signup.interface';
import { signupDto } from './signup.dto';
import { MulterModuleOptions } from '@nestjs/platform-express';

@Injectable()
export class SignupService {
  constructor(
    @InjectModel('signup') private readonly signupModel: Model<sign_in>,
  ) {}

  async signup_Create(signupDto: signupDto): Promise<sign_in> {
    const newRecipe = await new this.signupModel(signupDto);
    return newRecipe.save();
  }
  async signup_upload(signupDto: signupDto,@UploadedFile() file): Promise<sign_in> {
    signupDto.img = file.path;
    const newRecipe = await new this.signupModel(signupDto).save();
    return newRecipe.save();
  }

  async signup_All(): Promise<sign_in[]> {
    const recipes = await this.signupModel.find().exec();
    return recipes;
  }

  async findOne(id: string): Promise<sign_in> {
    return await this.signupModel.findOne({ _id: id });
  }

  async delete(id: string): Promise<sign_in> {
    return await this.signupModel.findByIdAndRemove(id);
  }

  async update(id: string, sign_in: sign_in): Promise<sign_in> {
    return await this.signupModel.findByIdAndUpdate(id, sign_in, { new: true });
  }

  createMulterOptions(): MulterModuleOptions {
    return {
      dest: './upload',
    };
  }
}

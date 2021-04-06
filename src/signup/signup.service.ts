import { Injectable, UploadedFile } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { sign_in } from './signup.interface';
import { signupDto } from './signup.dto';
import { MulterModuleOptions } from '@nestjs/platform-express';
import * as mongoose from 'mongoose';

@Injectable()
export class SignupService {
  constructor(
    @InjectModel('signup') private readonly signupModel: Model<sign_in>,
  ) {}

  
  async signup_Create(signupDto: signupDto): Promise<sign_in> {
    // this.count++;
    // var id = Math.floor(Math.random() * Math.floor(1000)).toString();
    // signupDto._id = ;
    const newRecipe = await new this.signupModel(signupDto).save();
    return newRecipe;
  }
  // async signup_upload(signupDto: signupDto,@UploadedFile() file): Promise<sign_in> {
  //   signupDto.img = file.path;
  //   const newRecipe = await new this.signupModel(signupDto).save();
  //   return newRecipe.save();
  // }

  async signup_All(): Promise<sign_in[]> {
    const recipes = await this.signupModel.find().exec();
    return recipes;
  }

  async findOne(email): Promise<sign_in> {
    return await this.signupModel.findOne({ email: email });
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
  // }
  // async findOneByEmail1(username): Model<sign_in> {

  //   return await this.signupModel.findOne({username: username});

  // }

  // async findOneByEmail(id: string): Promise<sign_in> {
  //   return await this.signupModel.findByIdAndRemove(id);
  // }


  





  
  // private readonly users = [
  //   {
  //     userId: 1,
  //     username: 'john',
  //     password: 'changeme',
  //   },
  //   {
  //     userId: 2,
  //     username: 'maria',
  //     password: 'guess',
  //   },
  // ];

  // async findOne(username: string): Promise<User | undefined> {
  //   return this.users.find(user => user.username === username);
  // }
}

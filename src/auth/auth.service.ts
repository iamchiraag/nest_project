import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Authinterface} from './interfaces/Authinterface'
import { AuthDto } from './dto/AuthDto';

@Injectable()
export class AuthService {

    constructor(
        @InjectModel('Auth') private readonly Authmodel: Model<Authinterface>,
      ) {}
    
      async Signup(AuthDto: AuthDto): Promise<String> {
        const newfuc = await new this.Authmodel(AuthDto).save();
        return 'successful Submitted';
      }
}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { SignupController } from './signup.controller';
import { Signup_schema } from './signup.schema';
import { SignupService } from './signup.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'signup', schema:  Signup_schema}]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false })
  ],
  controllers: [SignupController],
  providers: [SignupService]
})
export class SignupModule {}

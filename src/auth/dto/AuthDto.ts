import { IsNotEmpty, isNotEmpty } from 'class-validator';

export class AuthDto {

  id:string;
  username:string;
  password:string;
}
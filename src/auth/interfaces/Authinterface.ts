import { Document } from 'mongoose';
export interface Authinterface extends Document {
  id:string;
  username:string;
  password:string;
}
import { Document } from 'mongoose';


export interface sign_in extends Document{
    // _id?:String;
    // name:String,
    email:String,
    password:String
    // img:string;
} 
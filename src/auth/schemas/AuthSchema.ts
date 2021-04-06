import * as mongoose from 'mongoose';
export const AuthSchema = new mongoose.Schema({
    id:String,
    username:String,
    password:String
})
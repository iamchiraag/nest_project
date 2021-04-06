import * as mongoose from 'mongoose';
export const categorySchema = new mongoose.Schema({
 
    title: String,
    description: String
})
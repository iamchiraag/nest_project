import * as mongoose from 'mongoose';
export const Party_Schema = new mongoose.Schema({
    Party_name:String,
    Party_number:Number,
    opening_account:Number,
    prodID: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product',versionKey: false }]
})

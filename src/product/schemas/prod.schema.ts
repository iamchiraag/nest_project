import * as mongoose from 'mongoose';
export const Prod_Schema = new mongoose.Schema({
    prod_name: String,
    prod_des: String,
    purc_price:Number,
    sales_price:Number,
    opening_stock:Number,

    catId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'category',versionKey: false }]
})

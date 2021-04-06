import * as mongoose from 'mongoose';
export const p_orderSchema = new mongoose.Schema({
    order_no:Number,
   order_id:String,
   order_date:String
})

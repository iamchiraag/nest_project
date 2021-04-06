import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export interface Krishna extends Document {
  prod_name: String;
  prod_des: String;
  catId: [{ type: mongoose.Schema.Types.ObjectId; ref: 'Hntechno' }];
  purc_price: Number;
  sales_price: Number;
  opening_stock: Number;
}

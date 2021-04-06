import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export interface p_order extends Document {
  order_no: number;
  order_id: string;
  order_date?: string;
}

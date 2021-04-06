import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface chitthi extends Document {
    Party_name:string;
    Party_number:number;
    opening_account:number;
    prodID: [{ type: mongoose.Schema.Types.ObjectId; ref: 'product' }];
}

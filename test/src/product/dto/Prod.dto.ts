import { ObjectId } from "bson";

export class prod_Dto {
    prod_name: string;
    prod_des: string;
    catId:ObjectId;
    purc_price:Number;
    sales_price:Number;
    opening_stock:Number;
  }
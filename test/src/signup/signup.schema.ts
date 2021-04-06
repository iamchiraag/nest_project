import * as mongoose from 'mongoose';
export const Signup_schema = new mongoose.Schema({
    // email:String,
    // psw: {
    //     type: String,
    //     required: true
    // },
    // gender: {
    //     type: String,
    //     enum: ["male", "female"]
    // },
    img:
    {
        data: Buffer,
        contentType: String,
        
    }
    
  
})

import * as mongoose from 'mongoose';
import { ObjectId } from 'bson';
import * as bcrypt from 'bcrypt';
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
    // _id:{
    //         type: String,
    //         required: false
    //     },
    // _id:String,
    // name:String,
    email: String,
    password:String
    // img:
    // {
    //     data: Buffer,
    //     contentType: String,
        
    // }


    
  
})

// Signup_schema.pre('save', function(next){

//     let user = this;

//     // Make sure not to rehash the password if it is already hashed
//     if(!user.isModified('password')) return next();

//     // Generate a salt and use it to hash the user's password
//     bcrypt.genSalt(10, (err, salt) => {

//         if(err) return next(err);

//         bcrypt.hash(user.username, salt, (err, hash) => {

//             if(err) return next(err);
//             user.password = hash;
//             next();

//         });

//     });

// }); 

// Signup_schema.methods.checkPassword = function(attempt, callback){

//     let user = this;

//     bcrypt.compare(attempt, user.password, (err, isMatch) => {
//         if(err) return callback(err);
//         callback(null, isMatch);
//     });

// };

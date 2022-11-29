const mongoose=require('mongoose');
const users_model=new mongoose.Schema({
    user_name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});

let users=mongoose.model('users',users_model);
module.exports={users};
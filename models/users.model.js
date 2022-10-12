const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
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

//pre save is trigger, used to trigger function before a user is saved
users_model.pre('save',async function encryptPassword(next){
    const user=this;
    this.password=await bcrypt.hash(this.password,10);
    next();
})

//this method checks the given password by validating user's current password
users_model.methods.isValidPassword=async function checkPassword(password){
    const user=this;
    return await bcrypt.compare(password,user.password);
}

let users=mongoose.model('users',users_model);
module.exports={users};
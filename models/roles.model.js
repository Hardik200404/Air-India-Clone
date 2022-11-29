const mongoose=require('mongoose');
const roles_model=new mongoose.Schema({
    roles:{
        type:String,
        required:true,
        unique:true
    },
},{timestamps:true});

let roles=mongoose.model('roles',roles_model);
module.exports={roles};
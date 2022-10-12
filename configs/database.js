const mongoose=require('mongoose');

const connect=()=>{
    console.log("Connecting to MongoDB");
    return mongoose.connect('mongodb://localhost/AirIndia');
}
module.exports={connect};
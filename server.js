const express=require('express');//this import gives back express function
let app=express();//using express function we will initialize the app

const body_parser=require('body-parser');
//this is imported to parse the body of the req
//according to our required format
app.use(body_parser.json());

app.get('/',function(req,res){
    res.writeHead(200);
    res.end("Hello World");
})

require('./routes/help.route')(app);
//registering help route by passing the express app to help route

const {connect}=require('./configs/database');

app.listen(3000,async()=>{
    await connect();
    console.log('Connected to DB Successfully');
    console.log('Server Running on Port',3000);
})
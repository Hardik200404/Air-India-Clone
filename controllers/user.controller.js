const {users}=require('../models/users.model');

function get_users(req,res){
    let user=users.find()
    res.setHeader('content-type','application/json');
    res.writeHead(200)
    res.end(JSON.stringify({
        "Message":"Bruh"
    }))
}

module.exports={get_users}
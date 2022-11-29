function signUp_validator(req,res,next){
    let user={
        user_name:req.body.user_name,
        email:req.body.email,
        password:req.body.password
    }
    if(user.user_name && user.email && user.password){
        next();
    }else{
        res.setHeader('content-type','applicatoin/json')
        res.writeHead(400)
        res.end(JSON.stringify({
            "message":"Bad Content"
        }))
    }
}
module.exports={signUp_validator}
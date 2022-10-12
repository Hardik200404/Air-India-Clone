function help_index(req,res){
    res.setHeader('content-type','application/json');
    res.writeHead(200);
    res.end(JSON.stringify({
        message:"+919160239049"
    }))
}
module.exports={help_index}
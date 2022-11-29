const {get_users}=require('../controllers/user.controller');

module.exports=function(app){
    app.get('/users',get_users);
}
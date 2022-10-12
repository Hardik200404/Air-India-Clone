let {help_index}=require('../controllers/help.controller');
module.exports=function(app){
    app.get('/help',help_index);
}
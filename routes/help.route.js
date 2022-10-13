let help_controller=require('../controllers/help.controller');
module.exports=function(app){
    app.get('/help',help_controller.help_index);
}
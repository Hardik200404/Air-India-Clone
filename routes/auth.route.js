//importing controller
let {sign_up}=require('../controllers/auth.controller');

//importing validators
let {signUp_validator,
    check_email_withDB,
    check_roles_withDB,
    signIn_validator,}=require('../validators/auth.validator');
    
//defining endpoints
module.exports=function(app){
    app.post('/signup',[signUp_validator],sign_up);
    //app.post('/signup',[singUp_validator,check_email_withDB,check_roles_withDB],sign_up);
    //app.post('/signin',[signIn_validator],sign_in);
}

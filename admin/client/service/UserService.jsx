 import Utility from '../service/UtilityServices.jsx';
 import Config from '../src/config/config.jsx';
 
 // POST URLS
 var signupUrl = Config.getBaseServiceURL('user/signup');
 var authenticateUrl = Config.getBaseServiceURL('user/authenticate');
 var memberinfoUrl =  Config.getBaseServiceURL('user/memberinfo');
 module.exports = {
    signup : function(data) {  
        return  Utility.postService(signupUrl,data);
      },
    authenticate : function(data) {  
        return  Utility.postService(authenticateUrl,data);
      },
    memberinfo : function(data) {  
        return  Utility.getService(memberinfoUrl,data);
      }
 }
 
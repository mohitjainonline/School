 import Utility from '../service/UtilityServices.jsx';
 import Config from '../src/config/config.jsx';
 
 // POST URLS
 var setUpUrl = Config.getBaseServiceURL('login/setup');
 
 module.exports = {
    setUp : function(data) {  
        return  Utility.postService(setUpUrl,data);
      }
 }
 
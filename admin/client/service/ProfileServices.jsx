import Utility from '../service/UtilityServices.jsx';
import Config from '../src/config/config.jsx';

// POST URLS
var profilesaveUrl = Config.getBaseServiceURL('user/profilesave');
var ImageAddUrl = Config.getBaseServiceURL('images/add');

module.exports = {
  profilesave: function (data) {
    return Utility.postService(profilesaveUrl, data);
  },
  ImageAdd: function (data) {
    return Utility.postService(ImageAddUrl, data);
  }
}

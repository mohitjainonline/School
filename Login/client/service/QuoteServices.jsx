import Utility from '../service/UtilityServices.jsx';


// GET URLS
 var getQuotesFromCacheUrl = Config.getBaseServiceURL('Quote/GetQuoteFromDB');
 var GetBuildCachingQuotesUrl = Config.getBaseServiceURL('Quote/GetBuildCachingQuotes');
 var GetDummyQuotesUrl = "../js/dummyQuotes.json";
 //Post URL
 var SaveBuildCacheURL = Config.getBaseServiceURL('Quote/SaveBuildCache');
 var ModifyNCBAndIDVURL = Config.getBaseServiceURL('Quote/ModifyNCBAndIDV');
 var SaveInsurerSelectedPlanURL = Config.getBaseServiceURL('Quote/SaveInsurerSelectedPlan');
 var SendEmailQuotesURL = Config.getBaseServiceURL('Quote/SendEmailQuotes');

module.exports = {
  // Get Methods
  getQuotesFromCache: function (data){
    return Utility.getService(getQuotesFromCacheUrl,data);
  },
  GetBuildCachingQuotes: function (data){
    return Utility.getService(GetBuildCachingQuotesUrl,data);
  },
  //Post Methods
	SaveBuildCache : function (data){
		return Utility.postService(SaveBuildCacheURL,data);
	},
	ModifyNCBAndIDV : function(data){
		return Utility.postService(ModifyNCBAndIDVURL,data);
	},
	SaveInsurerSelectedPlan : function(data){
		return Utility.postService(SaveInsurerSelectedPlanURL,data);
	},
	GetDummyQuotes:function(data){
		return Utility.getService(GetDummyQuotesUrl,data);
	},
	SendEmailQuotes:function(data){
		return Utility.getService(SendEmailQuotesURL,data);
	},
}

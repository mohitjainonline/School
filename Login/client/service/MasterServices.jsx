 import Utility from '../service/UtilityServices.jsx';

// GET URLS
 var getUserInfoUrl = Config.getBaseServiceURL('Quote/GetUserInfo');
 var getMakesUrl = Config.getBaseServiceURL('PreQuote/GetVehicleMakes');
 var getModelsUrl = Config.getBaseServiceURL('PreQuote/GetVehicleModels');
 var getVariantsUrl = Config.getBaseServiceURL('PreQuote/GetVehicleVariants');
 var getPreviousInsurersUrl = Config.getBaseServiceURL('Quote/GetPreviousInsurers');
 var getRecentSearchesUrl = Config.getBaseServiceURL('PreQuote/GetEnquiryBaseYRS');
 var getRegistrationRegionsUrl = Config.getBaseServiceURL('PreQuote/GetRegistrationRegionsinfo');
 var getCustomerDetailsByRegCodeUrl = Config.getBaseServiceURL('PreQuote/GetCustomerDetailsByRegCode');
 var savePreviousPolicyStatusUrl = Config.getBaseServiceURL('Quote/SavePreviousExpiryDate');
 var GetRtoDetailsUrl =  Config.getBaseServiceURL('PreQuote/GetRtoDetails');
 var GetRegistrationNoDetailsUrl =  Config.getBaseServiceURL('PreQuote/GetRegistrationNoDetails');
 
 var GetShortURL =  Config.getBaseServiceURL('Quote/GetShortURL');
 var GetProposalMailURL = Config.getBaseServiceURL('PostQuote/GetProposalMail');
 var SendSMSUrl = Config.getBaseServiceURL('Quote/SendSMS');
 var UpdateMobilenumberByOTPSUrl = Config.getBaseServiceURL('PostQuote/UpdateMobilenumberByOTP');
 
 // POST URLS
 var createVisitUrl = Config.getBaseServiceURL('PreQuote/CreateVisit');
 var saveEnquiryUrl = Config.getBaseServiceURL('PreQuote/SaveEnquiryDetails');
 var suggestRTOUrl = Config.getBaseServiceURL('PreQuote/SaveCustomerRTOinfo');
 var suggestModelUrl = Config.getBaseServiceURL('PreQuote/SaveCustomerModelInfo');
 var SendQuotesMailUrl = Config.getBaseServiceURL('Quote/SendQuotesMail');
 var SaveCustomerJourneyUrl = Config.getBaseServiceURL('PostQuote/SaveCustomerJourney');
 var generateotpUrl = Config.getBaseServiceURL('PostQuote/generateotp');
 var verifyotpUrl = Config.getBaseServiceURL('PostQuote/verifyotp');
var ServiceLogUrl = Config.getBaseServiceURL('PostQuote/ServiceLog');

 module.exports = {
  // Get Methods
  getUserInfo: function (data){
		return Utility.getService(getUserInfoUrl,data);
  },
  getMakes: function (){
		return Utility.getService(getMakesUrl,{});
  },
  getModels : function (data){
		return Utility.getService(getModelsUrl,data);
  },
  getVariants : function (data){
		return Utility.getService(getVariantsUrl,data);
  },
  getPreviousInsurers : function (data){
		return Utility.getService(getPreviousInsurersUrl,data);
  },
  getRecentSearches : function (data){
		return Utility.getService(getRecentSearchesUrl,data);
  },
  getRegistrationRegions : function (data){
		return Utility.getService(getRegistrationRegionsUrl,data);
  },
  getCustomerDetailsByRegCode : function (data){
		return Utility.getService(getCustomerDetailsByRegCodeUrl,data);
  },
  savePreviousPolicyStatus : function (data){
    return Utility.getService(savePreviousPolicyStatusUrl,data);
  },
  GetRtoDetails : function (data){
    return Utility.getService(GetRtoDetailsUrl,data);
  },
   GetRegistrationNoDetails : function (data){
    return Utility.getService(GetRegistrationNoDetailsUrl,data);
  },
  GetShortURL : function (data){
    return Utility.getService(GetShortURL,data);
  },  
  GetProposalMail : function (data){
    return Utility.getService(GetProposalMailURL,data);
  },
  SaveCustomerJourney : function (data){
    return Utility.getService(SaveCustomerJourneyUrl,data);
  },
  UpdateMobilenumberByOTPS : function (data){
    return Utility.getService(UpdateMobilenumberByOTPSUrl,data);
  },
  // Post Methods
  ServiceLog : function(data){
		return Utility.postService(ServiceLogUrl,data);
	},
  saveEnquiry : function (data){
    return Utility.postService(saveEnquiryUrl,data);
  },
  suggestRTO : function (data){
    return Utility.postService(suggestRTOUrl,data);
  },
  suggestModel : function (data){
    return Utility.postService(suggestModelUrl,data);
  },
  SendQuotesMail : function (data){
    return Utility.postService(SendQuotesMailUrl,data);
  },
  SendSMS : function (data){
    return Utility.getService(SendSMSUrl,data);
  },
  generateotp : function (data){
    return Utility.postService(generateotpUrl,data);
  },
  verifyotp : function (data){
    return Utility.postService(verifyotpUrl,data);
  },
  createVisit : function() {  
		
        var visitId = 0;		
        // checking for Visit ID in cookies
        if(Utility.getCookie('Cookie_VisitLog') != "") {
          visitId = parseInt(Utility.getCookie('Cookie_VisitLog'));          
        } else {
          // If Visit Id not found in Cookies, then make server call
          // To Create Visit Model from url parameters
          var VisitModel = {
            UtmSource: Utility.getParameterByName("utm_source") || '',
            UtmTerm: Utility.getParameterByName("utm_term") || '',
            UtmCampaign: Utility.getParameterByName("utm_campaign") || '',
            UtmMedium: Utility.getParameterByName("utm_medium") || '',
            ReferrerUrl: document.referrer,
            VisitID: 0
          };
          Utility.postService(createVisitUrl,VisitModel).success(function(data){
			  visitId = data.VisitId;   
			  Utility.setCookie("Cookie_VisitLog",visitId,15);
		  });	  
         
        }
        return visitId;
      }
};

import Utility from '../service/UtilityServices.jsx';

//GET URL

 var GetProposalInfoUrl = Config.getBaseServiceURL('PostQuote/GetProposalInfo');
 var GetStatesUrl = Config.getBaseServiceURL('PostQuote/GetStates');
 var GetCitiesUrl = Config.getBaseServiceURL('PostQuote/GetCities');
 var GetCitiesHDFCUrl = Config.getBaseServiceURL('PostQuote/GetCitiesHDFC');
 var GetPostOfficeListUrl = Config.getBaseServiceURL('PostQuote/GetPostOfficeList');
 var GetPincodeListUrl = Config.getBaseServiceURL('PostQuote/GetPinCodeList');
 var GetPinCodeListUsingStateUrl = Config.getBaseServiceURL('PostQuote/GetPinCodeListUsingState');
 var GetInsurerSelectedPlanUrl = Config.getBaseServiceURL('PostQuote/GetInsurerSelectedPlan');
 var GetFinancialInstitutionUrl = Config.getBaseServiceURL('PostQuote/GetFinancialInstitution');
 var GetOccupationListUrl = Config.getBaseServiceURL('PostQuote/GetOccupationList');
 var GetInsurersJSONUrl = "../js/Insurer.json";
 var GetCityStateJSONUrl = "../js/CityState.json";
 var GetHDFCCityStateJSONUrl = "../js/HDFCCityState.json";
 var GetSendProposalMailUrl = Config.getBaseServiceURL('PostQuote/GetSendProposalMail');
 var GetSendSummaryMailUrl = Config.getBaseServiceURL('PostQuote/GetSendSummaryMail');
 var GetParRtoServicesUrl = Config.getBaseServiceURL('PostQuote/GetParRtoServices');
 var GetPANomineeUrl = Config.getBaseServiceURL('PostQuote/GetPANominee');
 var GetTwoWheelerPolicydetailsUrl = Config.getBaseServiceURL('PostQuote/GetTwoWheelerPolicydetails'); 
// POST URLS
var SavePostQuotesPersonalInfoURL = Config.getBaseServiceURL('PostQuote/SavePostQuotesPersonalInfo');
var SavePostQuotesVehiclePolicyURL = Config.getBaseServiceURL('PostQuote/SavePostQuotesVehiclePolicy');
var SavePostQuotesAdditionalDetailsURL = Config.getBaseServiceURL('PostQuote/SavePostQuotesAdditionalDetails');
var UpdateInsurerSelectedPlanUrl = Config.getBaseServiceURL('PostQuote/UpdateInsurerSelectedPlan');
var GetPAQuotesUrl = Config.getBaseServiceURL('PostQuote/GetPAQuotes');
var SaveAddonProposerUrl = Config.getBaseServiceURL('PostQuote/SaveAddonProposer');
var SavePANomineeUrl = Config.getBaseServiceURL('PostQuote/SavePANominee');
var SaveItemsUrl = Config.getBaseServiceURL('Quote/SaveItems');
var SaveFeedbackUrl = Config.getBaseServiceURL('PostQuote/SaveFeedback');


// Post Methods
module.exports = {
	SavePostQuotesPersonalInfo : function (data){
		return Utility.postService(SavePostQuotesPersonalInfoURL,data);
	},
	SavePostQuotesVehiclePolicy : function (data){
		return Utility.postService(SavePostQuotesVehiclePolicyURL,data);
	},
	SavePostQuotesAdditionalDetails : function (data){
		return Utility.postService(SavePostQuotesAdditionalDetailsURL,data);
	},
	UpdateInsurerSelectedPlan : function(data){
		return Utility.postService(UpdateInsurerSelectedPlanUrl,data);
	},
	GetPAQuotes : function(data){
		return Utility.postService(GetPAQuotesUrl,data);
	},
	SaveAddonProposer : function(data){
		return Utility.postService(SaveAddonProposerUrl,data);
	},
	SavePANominee : function(data){
		return Utility.postService(SavePANomineeUrl,data);
	},
	SaveItems : function(data){
		return Utility.postService(SaveItemsUrl,data);
	},
	SaveFeedback : function(data){
		return Utility.postService(SaveFeedbackUrl,data);
	},
//Get Method
	GetTwoWheelerPolicydetails: function (data){
		return Utility.getService(GetTwoWheelerPolicydetailsUrl,data);
	},
	GetPANominee: function (data){
		return Utility.getService(GetPANomineeUrl,data);
	},
	GetProposalInfo: function (data){
		return Utility.getService(GetProposalInfoUrl,data);
	},
	GetCities: function (data){
		return Utility.getService(GetCitiesUrl,data);
	},
	GetCitiesHDFC: function (data){
		return Utility.getService(GetCitiesHDFCUrl,data);
	},
	GetPostOfficeList: function (data){
		return Utility.getService(GetPostOfficeListUrl,data);
	},
	GetStateList: function (){
		return Utility.getService(GetStatesUrl);
	},
	GetPincodeList: function (data){
		return Utility.getService(GetPincodeListUrl,data);
	},
	GetPinCodeListUsingState: function (data){
		return Utility.getService(GetPinCodeListUsingStateUrl,data);
	},
	GetInsurerSelectedPlan:function(data){
		return Utility.getService(GetInsurerSelectedPlanUrl,data);
	},
	GetFinancialInstitution:function(data){
		return Utility.getService(GetFinancialInstitutionUrl,data);
	},
	GetOccupationList:function(data){
		return Utility.getService(GetOccupationListUrl,data);
	},
	GetInsurersJSON:function(data){
		return Utility.getService(GetInsurersJSONUrl,data);
	},
	GetCityStateJSON:function(data){
		return Utility.getService(GetCityStateJSONUrl,data);
	},
	GetHDFCCityStateJSON:function(data){
		return Utility.getService(GetHDFCCityStateJSONUrl,data);
	},
	GetSendProposalMail:function(data){
		return Utility.getService(GetSendProposalMailUrl,data);
	},
	GetSendSummaryMail:function(data){
		return Utility.getService(GetSendSummaryMailUrl,data);
	},
	GetParRtoServices:function(data){
		return Utility.getService(GetParRtoServicesUrl,data);
	}
};



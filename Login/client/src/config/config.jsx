var env = 'local',
config = {
		local: {
		protocol : 'http',
		rootApi : 'localhost:8085/api',
		adminUrl : 'http://localhost:8081'
	  },
	  qa: {
		protocol : 'https',
		rootApi : 'schmgm-nodeservices.herokuapp.com/api',
		adminUrl : 'http://localhost:8081'
	  },
	  uat: {
		protocol : 'https',
		rootApi : 'schmgm-nodeservices.herokuapp.com/api',
		adminUrl : 'http://localhost:8081'
	  },
	live: {
			protocol: 'https',
			rootApi: 'schmgm-nodeservices.herokuapp.com/api',
			adminUrl : 'http://localhost:8081'
		  }
	};

module.exports = {
	
	getBaseServiceURL : function(webService){
		return config[env].protocol + '://' + config[env].rootApi + '/' + webService;
	 },
	 
	getParameter : function(key)
	{
		return config[env][key];
	}	

}

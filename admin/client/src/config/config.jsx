var env = 'local',
config = {
		local: {
			protocol : 'http',
			rootApi : 'localhost:8085/api',
			rootApp : 'http://localhost:8080'
			},
		qa: {
			protocol : 'https',
			rootApi : 'schmgm-nodeservices.herokuapp.com/api',
			rootApp : 'https://sch-login.herokuapp.com'
			},
		uat: {
			protocol : 'https',
			rootApi : 'schmgm-nodeservices.herokuapp.com/api',
			rootApp : 'https://sch-login.herokuapp.com'
			},
		live: {
				protocol: 'https',
				rootApi: 'schmgm-nodeservices.herokuapp.com/api',
				rootApp : 'https://sch-login.herokuapp.com'
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

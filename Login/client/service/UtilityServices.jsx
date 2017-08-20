   import Auth from '../src/modules/Auth';
   
   var monthsJson = [{
        "monthId": 1,
        "name": "January"
      }, {
        "monthId": 2,
        "name": "February"
      }, {
        "monthId": 3,
        "name": "March"
      }, {
        "monthId": 4,
        "name": "April"
      }, {
        "monthId": 5,
        "name": "May"
      }, {
        "monthId": 6,
        "name": "June"
      }, {
        "monthId": 7,
        "name": "July"
      }, {
        "monthId": 8,
        "name": "August"
      }, {
        "monthId": 9,
        "name": "September"
      }, {
        "monthId": 10,
        "name": "October"
      }, {
        "monthId": 11,
        "name": "November"
      }, {
        "monthId": 12,
        "name": "December"
      }]
	  
	var title =[{value:1,name:'Mr.'},{value:2,name:'Mrs.'},{value:3,name:'Ms.'},{value:4,name:'M/S'}];
	var gender =[{value:1,name:'Male'},{value:2,name:'Female'}];
	  
 module.exports = {
	 
	getService: function(url,data,timeout,async) {
		jQuery.support.cors = true;
		var cache= false;
		if(async == undefined) async = true;
		if(timeout != undefined) timeout = timeout;
		if(url.indexOf('json')!=-1) cache=true;
		if(Auth.isUserAuthenticated() == true)
		{
			return $.ajax({ 
					method:'GET',
					cache:cache,
					url: url,
					data: data,
					async :async,
					timeout:timeout,					
					contentType: "application/json; charset=utf-8",
					headers: { 
						"Authorization": Auth.getToken(),
						//"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"
				 	}		
				});
		}
		else{
			return $.ajax({ 
					method:'GET',
					cache:cache,
					url: url,
					data: data,
					async :async,
					contentType: "application/json; charset=utf-8",
					timeout:timeout 		
				});
		}
		
	},
	postService: function(url,data,timeout,async) {
		if(async == undefined) async = true;
		if(timeout != undefined) timeout = timeout;
		jQuery.support.cors = true;
		return  $.ajax({
				method:'POST',
				url: url,
			  	data: data,
			   	async :async,
			   	timeout:timeout ,
			   	beforeSend: function (request) {
                if(Auth.isUserAuthenticated() == true)
				{
					request.setRequestHeader("Authorization", Auth.getToken());	
				}
            } 
		});
	},
  formatReg : function (registrationNo) {
            var regNo = registrationNo;
            regNo = regNo.replace(/-/g, "");
            var regNoArray = new Array(4);
            regNoArray[0] = regNo.slice(0, 2);
            regNoArray[1] = '';
            regNoArray[2] = '';
            regNoArray[3] = '';
            try {
                if (!isNaN(regNo.slice(2, 4))) { regNoArray[1] = regNo.slice(2, 4); }
                else {
                    if (!isNaN(regNo.slice(2, 3))) { regNoArray[1] = regNo.slice(2, 3); }
                    if (isNaN(regNo.slice(3, 4))) { regNoArray[2] = regNo.slice(3, 4); }
                }
                if (!isNaN(regNo.slice(4, 8))) { regNoArray[3] = regNoArray[3] + regNo.slice(4, 8); }
                else {
                    regNoArray[2] = regNoArray[2] + regNo.slice(4, 5);
                    if (isNaN(regNo.slice(5, 6)) == true && isNaN(regNo.slice(6, 7)) == true) { regNoArray[2] = regNoArray[2] + regNo.slice(5, 7); }
                    else {
                        if (isNaN(regNo.slice(5, 6))) { regNoArray[2] = regNoArray[2] + regNo.slice(5, 6); }
                        else { regNoArray[3] = regNoArray[3] + regNo.slice(5, 6); }
                        if (!isNaN(regNo.slice(6, 7))) { regNoArray[3] = regNoArray[3] + regNo.slice(6, 7); }
                    }
                    if (!isNaN(regNo.slice(7, 11))) { regNoArray[3] = regNoArray[3] + regNo.slice(7, 11); }
                }
            }
            catch (e) {
            }
            return regNoArray.join('-').replace(/ /g, "").replace(/--/g, "-").replace(/-\s*$/, "").replace(/[^- 0-9 a-z A-z]/g, "");
        },

	getParameterByName: function(name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	},
	CheckContainsInUrl: function(name, url) {
		if (!url) url = window.location.href;
		
		name = name.replace(/[\[\]]/g, "\\$&");		
		if(url.indexOf(name) != -1)
		{
			return true;
		}
		return false;
		
	},
	addCommas : function(value){
		if(value!=undefined) {
                value += '';
                var x = value.split('.');
                var x1 = x[0];
                var x2 = x.length > 1 ? '.' + x[1] : '';
                var lastThree = x1.substring(x1.length-3);
                var otherNumbers = x1.substring(0,x1.length-3);
                if(otherNumbers != '')
                    lastThree = ',' + lastThree;
                var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
                return res + x2;
            }else{
                return "";
            }
	},
	  getCookie : function(cname) {
			var name = cname + "=";
			var ca = document.cookie.split(';');
			for(var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return "";
		},
	  setCookie : function(cname, cvalue, exdays) {
			var d = new Date();
			d.setTime(d.getTime() + (exdays*24*60*60*1000));
			var expires = "expires="+d.toUTCString();
			document.cookie = cname + "=" + cvalue + "; " + expires;
		},
		populateDates : function(month,months,year){
            var dates = [];
            if(months[3].monthId==month || months[5].monthId==month || months[8].monthId==month || months[10].monthId == month){
                dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
            }else if(months[1].monthId == month){
                if(year%4==0) {
                    dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
                }else{
                    dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
                }
            }else{
                dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,29,30,31];
            }
            return dates;
        },
		
		getMonths : function(){
			return monthsJson;
		},
		
		getYears : function(numYears,oneLess){
			var  years =[];
			
			var currentYear = new Date().getFullYear();
			var currentMonth = new Date().getMonth() + 1;
			var currentDay = new Date().getDate();
			if(currentMonth == 12 && currentDay >= 1){	
				currentYear = currentYear + 1;				
			}
			
			if(numYears>0){
				
				numYears = numYears,
				oldestYear = currentYear - numYears;
				for (var i = currentYear-oneLess; i >= oldestYear; i--) {
					years.push(i);
				}
			}
			else{
				var numYears = -numYears;
				var oldestYear = currentYear-numYears-oneLess;
				for (var i = currentYear-numYears; i >= oldestYear; i--) {
					years.push(i);
				}
			}
			
			return years;
		},
		getRelationship : function () {
		
				return [{value: 'Spouse', name: 'Spouse'},
						{value: 'Son', name: 'Son'},
						{value: 'Daughter', name: 'Daughter'},
						{value: 'Mother', name: 'Mother'},
						{value: 'Father', name: 'Father'},
						{value: 'Sibling', name: 'Sibling'},
						{value: 'Guardian', name: 'Guardian'},
						{value: 'Other', name: 'Other'}
					   
				];
		},
		
		getAge: function (numYears) {
			var values = [];
			 for(var i=1; i <= numYears;i++) {
				values.push({value: i, name: i});
			}        
			return values;
		},
		getMaritalStatus : function(){
			return [{value: 1,name: "Single"},{value: 2,name: "Married"},
					{value: 3,name: "Divorcee" },{value: 4,name: "Widower"}];
		},  
		getDiffOfDates : function(firstDate,secondDate){
			var timeDiff = (secondDate.getTime() - firstDate.getTime());
			var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
			return diffDays;
        },  
		convertToObject:function(data){
			var arr = [];
			var len = data.length;
			for (var i = 0; i < len; i++) {
				arr.push({
					value : data[i],
					name : data[i],
				});
			}
			return arr;
		},
		GetFormattedDate :function(date,hideDate) {			
			date = new Date(date);
			var month = monthsJson[date.getMonth()].name;
			var day = date.getDate();
			var year = date.getFullYear();
			if(hideDate){
				return  month + " / " + year;
			}else{
				return day + " / " + month + " / " + year;
			}
			
		},
		GetMonth :function(date) {			
			var month = monthsJson[date].name;
			return  month;
		},
		GetTitle :function() {	
        		return title;		
		},
		GetGender :function() {				
			return gender;
		},
		GetCapitalize(str)
		{			
			return str.toLowerCase().replace(/\b[a-z]/g, function(letter) {return letter.toUpperCase();}); 
		},
		IsMobile(){			
                var check = false;
                (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
                return check;
		},
		
		SaveInCache: function(key, val) {  
			try{		
				localStorage.setItem(key, val);
			}
			catch(e)
			{
				//alert(e);
				//sessionStorage.setItem(key, val);
				return null;
			}
		},
		DeleteCache: function(key)
		{
			
				if (this.CheckStorage(key))
				{
					localStorage.removeItem(key);
					return true;
				}
				else
				{
					
					return false;
				}
			
		},
		GetFromCache: function(key) {
			try{
				if (this.CheckStorage(key))
					return localStorage.getItem(key);
				else
					return null;
			}
			catch(e)
			{
				//alert(e);
				return null;
			}
		},
		CheckStorage:function(key) {
			
				if (typeof window.localStorage != "undefined") {
					var x = localStorage.getItem(key);
					if (x == null || x == undefined) {
						return false;
					}
					else {
						return true;
					}
				}
				else {
				return false;
				}
		},
		redirectToPage: function(url,_this)
		{					
			if(_this != undefined && url != "")
			{
				_this.context.router.push(url);
			}
			else if(url != "")
			{
				location.href=url;				
			}
		
			
		},
		CheckForOwnerCasePlan: function(PlanId)
		{
		  var result=false;
		   if(PlanId==101 || PlanId==128 ||PlanId==129 || PlanId==130 || PlanId==104)
		   {
		     result=true;
		   }
		   return result;
		},
		guid:function() {
			function s4() {
				return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
			}
			return s4() + s4() + '-' + s4() + '-' + s4() + '-' +  s4() + '-' + s4() + s4() + s4();
		},
		getAgeFromDate: function (dateString) {
			  var today = new Date();
			  var birthDate = new Date(dateString);
			  var age = today.getFullYear() - birthDate.getFullYear();
			  var m = today.getMonth() - birthDate.getMonth();
			  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
				age--;
			  }
			  return age;
			},
		dateDiff: function(dt1, dt2)
		{
			/*
			 * setup 'empty' return object
			 */
			var ret = {days:0, months:0, years:0};

			/*
			 * If the dates are equal, return the 'empty' object
			 */
			if (dt1 == dt2) return ret;

			/*
			 * ensure dt2 > dt1
			 */
			if (dt1 > dt2)
			{
				var dtmp = dt2;
				dt2 = dt1;
				dt1 = dtmp;
			}

			/*
			 * First get the number of full years
			 */

			var year1 = dt1.getFullYear();
			var year2 = dt2.getFullYear();

			var month1 = dt1.getMonth();
			var month2 = dt2.getMonth();

			var day1 = dt1.getDate();
			var day2 = dt2.getDate();

			/*
			 * Set initial values bearing in mind the months or days may be negative
			 */

			ret['years'] = year2 - year1;
			ret['months'] = month2 - month1;
			ret['days'] = day2 - day1;

			/*
			 * Now we deal with the negatives
			 */

			/*
			 * First if the day difference is negative
			 * eg dt2 = 13 oct, dt1 = 25 sept
			 */
			if (ret['days'] < 0)
			{
				/*
				 * Use temporary dates to get the number of days remaining in the month
				 */
				var dtmp1 = new Date(dt1.getFullYear(), dt1.getMonth() + 1, 1, 0, 0, -1);

				var numDays = dtmp1.getDate();

				ret['months'] -= 1;
				ret['days'] += numDays;

			}

			/*
			 * Now if the month difference is negative
			 */
			if (ret['months'] < 0)
			{
				ret['months'] += 12;
				ret['years'] -= 1;
			}

			return ret;
		}
		

};

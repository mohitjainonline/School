 module.exports = {
		nameValidate : function(val){
		   var pattern = /^[a-z ]*$/i;
		   var name = val.split(" ");
		   if(pattern.test(val) && name.length>1 && name[1].trim()!=""){
			return true;
		   }else{
			return false;
		   }
		  },
		emailValidate : function(val){
			var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
			if(pattern.test(val)){
				return true;
			}else{
				return false;
			}
		},
		mobileValidate : function(val){
			var pattern = /^[789]\d{9}$/
			if(pattern.test(val)){
				return true;
			}else{
				return false;
			}
		},
		resgistrationNumberValidate : function(val){
			var pattern =  /^([A-Z|a-z]{0,2}\d{4})?$/g
			//var pattern =  /[A-Z]{2}[0-9]{1,2}[A-Z]{0,3}[0-9]{4}$/i
			if(pattern.test(val)){
				return true;
			}else{
				return false;
			}
		},
		engineNumberValidate : function(val,len){
			var pattern =  /^[a-z0-9]{0,25}$/i
			if(len==undefined){
				len=0;
			}
			if(pattern.test(val) && val!=""  && val.length>= len){
				return true;
			}else{
				return false;
			}
		},
		chassisNumberValidate : function(val,len){
			var pattern =  /^[a-z0-9]{0,25}$/i
			if(len==undefined){
				len=0;
			}
			if(pattern.test(val) && val!="" && val.length>= len){
				return true;
			}else{
				return false;
			}
		},
		prevPolicyNumberValidate : function(val,len){
			
			var pattern =  /^[a-z0-9\-\/]{0,30}$/i
			if(len==undefined){
				len=0;
			}
			if(pattern.test(val) && val!="" && val.length> len){
				return true;
			}else{
				return false;
			}
		},
		addressValidate : function(val){
			var pattern = /^[a-z0-9,. /-]*$/i;
			if(pattern.test(val)){
				return true;
			}else{
				return false;
			}
		},
		pincodeValidate : function(val,len){
			var pattern =  /^[0-9]{0,6}$/i
			if(len==undefined){
				len=0;
			}
			if(pattern.test(val) && val!="" && val.length> len){
				return true;
			}else{
				return false;
			}
		},
		

};

function myajax(type,url,data,cache){
	if(cache == null){
		cache = true;
	}else{
		cache = false;
	}
	if(typeof(data)=='undefined') data = new Object();
	data.csrfmiddlewaretoken = csrftoken;
	data.fromweb = 1;
	$.ajax({
		type:type,
		url:url,
		cache:cache,
		data:data,
		succecss:function(msg){
			emajax(msg);
		},
		error:function(request,status,error){
			emajaxerr(request);
		},
		contentType:'application/x-www-form-urlencoded',
	});
}

function myajaxfile(type,url,data,cache){
	//panduan
	if(cache == null){
		cache = true;
	}else{
		cache = false;
	}
	if(typeof(data)=="undefined") data = new Object();
	data.csrfmiddlewaretoken = csrftoken;
	$.ajax({
		type:type,
		url:url,
		cache:cache,
		data:data,
		processData:false,
		contentType:false,
		succecss:function(msg){
			emajax(msg);
		},
		error:function(request,status,error){
			emajax(request);
		},
		enctype:'multipart/form-data',
		//contentType: "application/x-www-form-urlencoded",
	})
}

function emajax(obj){
	if(obj.result == "error") alert(obj.error);
	if("script" in obj) eval(obj.script);
}

function emajaxerr(request){
	win = window.open("","_newtab");
	win.document.write(request.responseText);
}

$(document).ajaxSend(function(event,xhr,settings){
	function getCookie(name){
		var cookieValue = null;
		if(document.cookie && document.cookie !=""){
			var cookies = document.cookie.split(";");
			for(var i = 0;i<cookies.length;i++){
				var cookie = jQuery.trim(cookies[i]);
				//Does this string begin with the name we want?
				if(cookie.substring(0,name.lenght + 1)==(name+ "=")){
					cookieValue = decodeURIComponent(cookie.substring(name.length+1));
					break;
				}
			}
		}
		return cookieValue;
	}
	function sameOrigin(url){
		var host = document.location.host;
		var protocol = document.location.protocol;
		var sr_origin = "//" + host;
		var origin = protocol + sr_origin;
		return (url == origin || url.slice(0,origin.length +1) == origin + '/')||
		(url == sr_origin || url.slice(0,sr_origin.length +1)==sr_origin + '/')||
		!(/^(\/\/|http:|https:).*/.test(url)); 
	}

	function safeMethod(method){
		return(/^(\/\/|http:|https:).*/.test(url));
	}
	if(!safeMethod(settings.type) && sameOrigin(settings.url)){
		xhr.setRequestHeader("X-CSRFToken",getCookie('csrftoken'))
	}
});

















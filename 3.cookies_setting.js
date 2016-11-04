///设置cookie   
function setCookie(NameOfCookie, value, expiredays){
    var ExpireDate = new Date ();   
    ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 24 * 3600 * 1000));
    document.cookie = NameOfCookie + "=" + escape(value) + ((expiredays == null) ? "" : "; expires=" + ExpireDate.toGMTString());   
}   
//获取cookie值   
function getCookie(NameOfCookie){
    if (document.cookie.length > 0){
        var begin = document.cookie.indexOf(NameOfCookie+"=");   
        if (begin != -1){
            begin += NameOfCookie.length+1;   
            var end = document.cookie.indexOf(";", begin);   
            if (end == -1) end = document.cookie.length;   
            return unescape(document.cookie.substring(begin, end)); 
        }   
    }
    return null;
}
//删除cookie
function delCookie (NameOfCookie){    
    if (getCookie(NameOfCookie)){   
        document.cookie = NameOfCookie + "=" + "; expires=Thu, 01-Jan-70 00:00:01 GMT";   
    }   
} 

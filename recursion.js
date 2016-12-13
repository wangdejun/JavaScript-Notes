function isPalindrome(text){
	if(text.length<=1){
		return true
	}
	if(text.charAt(0)!=text.charAt(text.length-1)){
		return false
	}
	return isPalindrome(text.substr(1,text.length-2))
}


console.log(isPalindrome("w"))

function isHuiwen(text){
	if(text.length<=1){
		return true
	}
	if(text.charAt(0)!=text.charAt(text.length-1)){
		return false
	}
	return isHuiwen(text.substr(1,text.length-2))
}

console.log(isHuiwen("wwwwwwawwwwww"))
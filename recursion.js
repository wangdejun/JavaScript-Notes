// function isPalindrome(text){
// 	if(text.length<=1){
// 		return true
// 	}
// 	if(text.charAt(0)!=text.charAt(text.length-1)){
// 		return false
// 	}
// 	return isPalindrome(text.substr(1,text.length-2))
// }

// console.log(isPalindrome("ava"))


// function isHuiwen(text){
// 	if(text.length<=1){
// 		return true
// 	}

// 	if(text.charAt(0)!=text.charAt(text.length-1)){
// 		return false
// 	}
// 	return isHuiwen(text.substr(1,text.length-2))
// }

// console.log(isHuiwen("wwwwwwawwwwww"))

// console.log("wangdejun".charAt("wangdejun".length-1))

function isPalindrome(text){
	if(text.length <=1){
		return true
	}
	if(text.charAt(0)!=text.charAt(text.length-1)){
		return false
	}
	return isPalindrome(text.substr(1,text.length-2))
}

console.log(isPalindrome("ava"))

function isPalindrome(text){
	// 首先当只有一个的时候，判断为真
	if(text.length<=1){
		return true
	}
	//设定跳出条件，当首位两个元素一旦为不相同的字符时候，即可判断为false
	if(text.charAt(0)!=text.charAt(text.length-1)){
		return false
	}
	//再一次调用函数
	return isPalindrome(text.substr(1,text.length-2))
}





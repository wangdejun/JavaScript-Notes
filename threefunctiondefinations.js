
// 3种匿名函数的方式
window.onload = function(){
	console.log("loaded");
}


var ninja = {
	shout:function(){
		console.log("shout out");
	}
}

ninja.shout()

setTimeout(
	function(){
		console.log("shout out the name after 5 second!")
	},5000
)
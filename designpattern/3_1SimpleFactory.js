var Basketball = function(){
	this.intro = "篮球盛行于美国"
}

Basketball.prototype = {
	getMember:function(){
		console.log('篮球运动需要5个人');
	},
	getBallSize:function(){
		console.log("篮球很大");
	}
};

var Football = function(){
	this.intro = "足球盛行于世界"
}

Football.prototype = {
	getMember:function(){
		console.log('足球运动需要11个人');
	},
	getBallSize:function(){
		console.log("足球很大");
	}
};
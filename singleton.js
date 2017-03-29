//理解闭包与函数式编程
(function(){
	return function(){
		console.log("-------2222222222-----")
		var x3=12;
		return function(){
			console.log(x3);
			var x4 = 4444444;
			return function(){
				return x4;
			}
		};
	}
})()()()()();

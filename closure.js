var outervalue = "wangdejun1"

function wrap(){
	var outervalue1 = "wangdejun2"
	function outerFunction(){
		console.log(outervalue);
		console.log(outervalue1)
		return outervalue1
	}
	return outerFunction()
}

name = wrap()
console.log(name)

// 使用闭包时，闭包的环境信息会一直保存在内存里，所以是有开销的
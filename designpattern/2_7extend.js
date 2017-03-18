
/**
 * extend method
 * @param  {[type]} target [description]
 * @param  {[type]} source [description]
 * @return {[type]}        [description]
 */
var extend = function(target,source){
	for(var property in source){
		target[property] = source[property];
	}
	return target;
}

var book = {
	name:"JavaScript设计模式",
	alike:["css","html","JavaScript"]
}

var anotherBook = {
	color:"blue"
}

extend(anotherBook,book);
console.log(anotherBook.name)
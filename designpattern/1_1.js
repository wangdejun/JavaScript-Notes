
//用这个prototype扩展了原生Obj的方法
Object.prototype.addMethod = function(name,fn){
	this[name]=fn;
	return this
};

//new一个对象 
var a = new Object();
//给这个对象通过addMethod添加
a.addMethod("checkEmail",function(){
	console.log("I 'm checking checkEmail");
	return this;
}).addMethod("checkPassword",function(){
	console.log("I am checking Password");
	return this;
})

a.checkEmail().checkPassword()
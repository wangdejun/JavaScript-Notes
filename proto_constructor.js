/**
 * ---------------
 * 使用原型来构造对象
 * 新对象通过原型链来共享原型上的方法和变量
 */
//创建了一个原型，使用其他的来继承这个原型，从而快速创建具有几乎一样功能对象，newobject
var landRover = {
	name:'landRover',
	start:function(){
		console.log('%s start',this.logo);
	},
	run:function(){
		console.log("%s running",this.logo);
	},
	stop:function(){
		console.log('%s stop', this.logo);
	}
}
var landWind = Object.create(landRover);
landWind.logo = "landWind";
var landCruiser = Object.create(landRover);
landCruiser.logo = "landCruiser";

landWind.run()
landCruiser.stop()

/**
 * 创建对象的第二种方法使用构造函数来构造对象
 * --------------------
 */
//Car 构造函数
function Car(logo){
	this.logo = logo || "unknown name"
}
//设置构造函数Car的prototype属性
Car.prototype = {
	start:function(){
		console.log('%s start',this.logo);
	},
	run:function(){
		console.log("%s running",this.logo);
	},
	stop:function(){
		console.log('%s stop', this.logo);
	}
}
//创建对象
var landRover_1 = new Car("landRover_1");
var landCruiser_1 = new Car("landCruiser_1");
//调用方法
landRover_1.start()
landRover_1.run()
landRover_1.stop()
landCruiser_1.start()






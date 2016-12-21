var a = undefined;
console.log(typeof(a))
a = [1,2]
console.log(typeof(a))
//数组其实是个对象
a = null;
console.log(typeof(a))
//null是未引用，也是一个对象

console.log(undefined==null)
console.log(undefined===null)

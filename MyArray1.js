function MyArray(){};
MyArray.prototype.length = 0;

(function(){
    var methods = ['push','pop','shift','unshift','slice','splice','join'];
    for(var i= 0;i<methods.length;i++)
        (function(name){
            MyArray.prototype[name]=function(){
                return Array.prototype[name].apply(this,arguments);
            };
        })(methods[i]);
})();

var mine = new MyArray();
mine.push(1,2,3,4)
console.log(mine);
// 测试通过

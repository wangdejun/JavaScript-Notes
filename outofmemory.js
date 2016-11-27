/**
 * showMem（）
 * --------
 * 格式化输出结构
 */

var showMem = function(){
    var mem = process.memoryUsage();
    var format = function(bytes){
        return (bytes/1024/1024).toFixed(2) + 'MB';
    };
    console.log('Process:heapTotal '+ format(mem.heapTotal)+' heapUsed ' + format(mem.heapUsed)+ ' rss '+ format(mem.rss));
    console.log("------------------------------------------------")
}

/**
 * outofmemory.js
 * --------------
 * 一直不停分配内存，但是不回收内存
 */

// var useMem = function(){
//     var size = 20 * 1024 *1024
//     var arr = new Array(size);
//     for(var i=0;i<size;i++){
//         arr[i]=0;
//     }
//     return arr;
// }
// var total = []
// for(var j=0;j<15;j++){
//     showMem();
//     total.push(useMem());
// }
// showMem()

/**
 * 使用Buffer
 */
var useMem = function(){
    var size = 200 * 1024 * 1024;
    var buffer = new Buffer(size);
    for(var i = 0;i<size;i++){
        buffer[i]= 0;
    }
    return buffer;
}

var total = []
for(var j=0;j<15;j++){
    showMem();
    total.push(useMem());
}
showMem()
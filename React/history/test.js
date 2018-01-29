setImmediate(function(){
    console.log("setImmediate延迟");
});

process.nextTick(function(){
    console.log("nextTick延迟")
});

console.log("正常执行");
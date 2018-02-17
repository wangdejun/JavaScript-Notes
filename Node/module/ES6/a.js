var b = require('./b');

console.log(b.foo());

setTimeout(()=>{
    console.log(b.foo());
}, 600);

setTimeout(()=>{
    console.log(b.foo());
}, 1500);

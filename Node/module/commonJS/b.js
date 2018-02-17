let foo = 1;
setTimeout(()=>{
    foo = 2;
}, 500);

setTimeout(()=>{
    foo = 3;
}, 1000);

module.exports = {
    foo: ()=>{
        return foo;
    }
};


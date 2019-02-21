function counter(start){
    let nextValue=Math.round(start);
    return {
        next:function(){
            return nextValue++;
        }
    }
}

let serializeValue = counter(10000);
console.log(serializeValue.next());
console.log(serializeValue.next());
console.log(serializeValue.next());


for (x in [1,2,3,4]){
    console.log(x)
    console.log(counter(x).next());
}
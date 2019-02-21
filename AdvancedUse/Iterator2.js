function range(min, max){
    return {
        get min(){
            return min;
        },
        get max(){
            return max;
        },
        includes:function(x){
            return x<=max && x>=min;
        },
        toString:function(){
            return "["+min+","+max+"]";
        },
        __iterator__:function(){
            let val = Math.ceil(min);
            return {
                next:function(){
                    if(val>max)
                        throw stopIteration;
                    return val++;
                }
            }
        }
    }
}
console.log(range(1,10))

for(let i of range(1,10)) console.log(i);
const incrementCounter = (list, index) =>{
    return  [
                ...list(0, index),
                list[index]+1,
                ...list.slice(index+1)
            ];
};

let list = [1,2,3,4,5,6];
console.log(incrementCounter(list, 2));
console.log(incrementCounter(list, 2));

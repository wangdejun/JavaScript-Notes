function sumFibs(num) {
    var arrFib = [1];
    for(var i=1;i<=num;){
      arrFib.push(i);
      i = arrFib[arrFib.length-1] + arrFib[arrFib.length-2];
    }
    
    return arrFib.filter(function(value){
      return value%2!=0;
    }).reduce(function(pre,cur){
      return pre + cur;
    });
  }
  
  sumFibs(4);  
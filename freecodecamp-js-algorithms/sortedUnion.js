/**
 * Write a function that takes two or more arrays and returns 
 * a new array of unique values in the order of the original 
 * provided arrays.
 * @param {*Array} arr 
 */

function uniteUnique( arr ) {
	var newarr = [];
	var uniqueArr = [];
	// concat(返回一个spreading 的数组)
	for (var i = 0; i < arguments.length; i++) {
        // handle the argument object
        // 不改变顺序的情况下合并为一个大数组；
		newarr = newarr.concat(arguments[i]);
	}
    // 不改变顺序的情况下对数组去重
    // key：Array.prototype.includes()方法；
	for (var j = 0; j < newarr.length; j++) {
		if (!uniqueArr.includes(newarr[j])) {
			uniqueArr.push(newarr[j]);
		}
	}
    return uniqueArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))


/**
 * second method
 * uniteUnique
 * key method:
 * args.reduce(function(arrA,arrB){
 * return arrA.concat(arrB.filter(function(i){
 *  return arrA.indexOf(i)===-1;
 * }))
 * })
 */
function uniteUnique(arr1, arr2, arr3) {
    var newArr;
    // Convert the arguments object into an array
    // 把arguments 对象 转成数组，使用Array.prototype.slice.call(argument)
    var args = Array.prototype.slice.apply(arguments);
    console.log("After the apply")
    console.log(args);
    // Use reduce function to flatten the array
    // 使用reduce方法拍平数组
    newArr = args.reduce(function (arrA, arrB) {
    // Apply filter to remove the duplicate elements in the array；
    // 使用filter 方法移除数组中的duplicate elements；
    return arrA.concat(arrB.filter( function(i) {
            return arrA.indexOf(i) === -1;
        }));
    });
        return newArr;
   }

   // test here
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));


function uniteUnique1(arr1, arr2, arr3) {
    var newArr;
    // Convert the arguments object into an array
    // 把arguments 对象 转成数组，使用Array.prototype.slice.call(argument)
    var args = Array.prototype.slice.apply(arguments);
    console.log("After the apply----");
    console.log(args);
    // Use reduce function to flatten the array
    // 使用reduce方法拍平数组
    newArr = args.reduce(function (arrA, arrB) {
    // Apply filter to remove the duplicate elements in the array；
    // 使用filter 方法移除数组中的duplicate elements；
        return arrA.concat(arrB);
    });

    var smallArr = [];
    smallArr.push(newArr[0]);
    for(var i=0; i<newArr.length; i++){    
        var flag = true;
        for(var j=0; j<smallArr.length; j++){
            if(newArr[i] == smallArr[j]){
                flag = false;
                break;
            }
        }
        if (flag){
            console.log(smallArr.constructor.toString());
            smallArr.push(newArr[i]);
        }
    }
    return smallArr;
   }

   // test here
console.log(uniteUnique1([1, 3, 2], [5, 2, 1, 4], [2, 1]));
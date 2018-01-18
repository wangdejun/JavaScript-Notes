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
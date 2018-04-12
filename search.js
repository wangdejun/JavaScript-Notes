var stringArr = [ 
    'alice',
    'bob',
    'carlos',
    'carol',
    'craig',
    'dave',
    'erin',
    'eve',
    'frank',
    'mallory',
    'oscar',
    'peggy',
    'trent',
    'walter',
    'wendy',
];


function search(arr, str){
    for(let i = 0; i< arr.length; i++) {
        console.log(i, arr[i]);
        if(arr[i]===str){
            return i;
        }
    }
    return -1;
}

console.log(search(stringArr, 'walter'));


function binarySearch(arr, str, low, high) {
    if (low >= high)
        return -1;
    let mid = low + Math.floor((high - low) / 2);

    if(str > arr[mid]){
        return binarySearch(arr, str, mid+1, high);
    }else if(str < arr[mid]){
        return binarySearch(arr, str, low, mid-1);
    }else{
        return mid;
    }
}

console.log(binarySearch(stringArr, 'walter', 0, stringArr.length));


function insertSort(stringArr){
    let n = stringArr.length;
    for(let i=0;)
}
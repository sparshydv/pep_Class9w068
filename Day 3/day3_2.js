function mergeArrays(arr1, arr2){
    let finalArray = [...arr1, ...arr2];
    return finalArray;
}

arr1 = [1,2,3];
arr2 = [4,5,6];
res = mergeArrays(arr1, arr2);
console.log(res);
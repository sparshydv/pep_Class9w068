function sumArr(arr1, arr2){
    let sum = 0;
    arr3 = [...arr1, ...arr2]
    for(a of arr3){
        sum = sum + a;
    }
    console.log(sum);

    
}

const arr1 = [1,2,3];
const arr2 = [4,5,6];
sumArr(arr1, arr2);
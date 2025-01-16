function logArguments(a,b, ...arr1){
    console.log([a,b, ...arr1]);

}

let a = 1;
let b = 2;
const arr1 = [3,4,5];
logArguments(a, b, arr1);
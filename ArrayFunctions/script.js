let numbers = [1,2,3,4,5,6,7,8,9,10];

//callback is (()) bracket inside bracket


//All these uses callback functions
//For Each Edits the Existing Array
numbers.forEach((item, index, array) => {
    // console.log(item + 2,index,array);

    // numbers[index] = item + 2;
})
     
//Filter Creates a New Array
//It is used to prevent the  usage of if else in side the loops in js
const evenNumbers = numbers.filter((item) =>{return item % 2 === 0;})
// console.log(evenNumbers);


//Map Creates a New Array
//Most used 
const fruits = ['apple', 'banana', 'mango', 'guava', 'orange'];
const fruitList = fruits.map((fruit) => fruit.toUpperCase());
// console.log(fruitList);

//Example of Map
const items = [
    {name: "Bike", price: 100},
    {name: "TV", price: 200},
    {name: "Album", price: 10},
    {name: "Book", price: 5},
    {name: "Phone", price: 500},
]

const itemNames = items.map((item) => item.name);
//console.log(itemNames);
const itemPrices =items.map((item) => item.price);
//console.log(itemPrices);


const rawPrice = [22.44556, 45.6789, 67.8907, 89.7890];
//const updatedPrice = rawPrice.map((price) => { console.log(`₹  ${price.toFixed(2)}`) });

//Find() returns the first element that satisfies the condition like filter but 
// filter tells all the elements that satisfy the condition and 
// find tells the first element that satisfies the condition

//Creates new array

const students = [
    {name: "John", age: 17},
    {name: "Jane", age: 18},
    {name: "Doe", age: 19},
    {name: "Harry", age: 20},
    {name: "Ron", age: 21},
]

const topStudents = students.find((student) => student.age > 18);
// console.log(topStudents);


//Every() returns true if all the elements satisfy the condition

const numbers1 = [1,2,3,4,5,6,7,8,9,10];
const isNaturalNumber = numbers1.every((number) => number > 0);
console.log(isNaturalNumber);




//Reduce() is used to reduce the array to a single value
const numb = [10, 20, 30, 40];
const sum = numb.reduce((acc, num) => acc + num, 0);
// console.log(sum); // Output: 100



//Sort() is used to sort the array but 
//Problem with on binary terms so can give 10 smaller than 2

const num = [1, 30, 4, 21, 100000];
const sortedNumbers = num.sort();
console.log(sortedNumbers); // Output: [1, 100000, 21, 30, 4]

    
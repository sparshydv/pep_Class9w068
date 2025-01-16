function calculateDiscount(a, b = 10){
    return a - (a * b / 100);
}


let price = 100;
let discount = 20;
finalPrice = calculateDiscount(price, discount);
console.log("MRP is:", price);
console.log("Price after Discount is:", finalPrice);
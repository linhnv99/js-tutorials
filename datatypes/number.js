/*
    Có 2 kiểu: 
    + Regular numbers 
    + BigInt numbers

 */

let billion = 1e9; // 1 tỷ

console.log(1e3 == 1000); // *1000
console.log(1.2e5 == 1.2 * 100000);
console.log(2e-6 == 2/1000000);


// Math
let num = 9.75;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(num.toFixed(1));


console.log(0.1 + 0.2)// 0.30000000000000004

console.log("Max: ", Math.max(1,2,3,4,1,2,3,45,6));
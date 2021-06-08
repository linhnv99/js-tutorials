// console.log(abc); error because abc is not defind

// ----------------var-------------------
var a;
console.log(a); // undifinded
a = 10;

if (a % 2 == 0) {
    var a = 19;// defind again
    console.log(a);// 19
}

console.log(a);// 19

var a = 1; // ok

// ----------------let-------------------
let s;
console.log(s);// undifined
s = "Hello";

if (s.length <= 10) {
    let s = "Hi"; // defind again
    console.log(s); // Hi
}

console.log(s);// Hello;

// let s = "Hello JS";// error 

// ----------------const-------------------
// const n;// error
const NUMBER = 5;
console.log(NUMBER);


/*
    Sự khác nhau giữa var, let, const 

    var: global scope
    let: block scope. Không thể định nghĩa lại trong cùng 1 block
    const: hằng số, bắt buộc phải khởi tạo giá trị, k thể gán lại cũng k thể định nghĩa lại
*/



// ***Variable naming
// + chữ cái, chữ số, ký tự $ và _
// + chữ đầu k được là chữ số
// + thông thường sd camalCase
// + dùng chữ hoa khi khai báo const

// correct
    let userName;
    let _number;
    let $a = 1;

// incorrect
    // let 4number;
    // let user-name;
    // let password;


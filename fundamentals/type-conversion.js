
console.log("===============NUMERIC CONVERSIONS==============");

console.log("10" + 1, " - type of: ", typeof ("10" +1)); // 101  - toán tử cộng chuỗi => 101(string)
console.log("10" / "10"); // convert string to number
console.log(1 + 1 + '1'); // 21(string) -> left to right
console.log(Number("abc"));  // NaN 
console.log(Number("")); // 0
console.log(typeof Number("10")); // number

// Numeric conversion rule:

// undefined => NaN
// null => 0
// true => 1
// false => 0

// "" -> 0 || "   " -> 0
// "123" => 123(number)
// "abc" => NaN


console.log("====Use `+` to String concatenation====");

// Use binary `+` to String concatenation

let s1 = "my";
let s2 = "string";
console.log(s1 + s2); // mystring


// Use unary `+` to Numeric conversion

let n1 = "5";
console.log("====Use `+` to Numeric conversion====");
console.log("n1 before: ", typeof n1); // string
console.log("n1 after: ", typeof +n1); // number

console.log("boolean(true, false) -> number with `+`: ", +true, +false); // 1, 0



console.log("=================BOOLEAN CONVERSIONS==============");

console.log(Boolean("")); // false
console.log(Boolean("    ")); // true vì tồn tại whitespace
console.log(Boolean("linh")); //true
console.log(Boolean(null)); //false


// Boolean conversion rule:
// 0, null, undefined, NaN, "" => false
// other                        => true



console.log("===================PRACTICE================");

console.log("" + 1 + 0); // 10
console.log(Number("  ") + 1); // 1
console.log(true + false); // 1
console.log("  5  " + 5); //   5  5
console.log("  5  " - 5); //   0
console.log(undefined + 1) // NaN  vì undefined là không xác định
console.log(null + 1); // 1

console.log(" \t \n" - 2); // -2 vì \t và \n đơn giản như tạo 1 whitespace -> 0; 0 - 2 = -2;
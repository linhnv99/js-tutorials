/**
 *  String is immutable
 *  
 * 
 */

let s = 'Linh';
let s1 = new String("Linh");

// ES6
let s2 = `Linh Nguyen`;

console.log(`Hello ${s2}`);


console.log("s[index]: ", s2[0]);

console.log("s.charAt(): ", s.charAt(0));

// different

console.log(s[10000]);// undefined
console.log(s.charAt(1000))// ''


// immutable

let myName = "Linh";

myName.concat("abc");

console.log(myName); // Linh


// str.slice(start [, end])
// str.substring(start [, end])
// str.substr(start [, length])
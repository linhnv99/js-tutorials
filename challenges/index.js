
// Map and Set
// ex1:
let john = { name: "John" };

// array
let array = [john];

// map
let map = new WeakMap();
map.set(john, "Hello John");

john = null; 

console.log(map.get(john));// ?
console.log(array[0]);//?

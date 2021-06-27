//  Map like an Object. allows keys of any type
let map = new Map();


map.set(1, "Number 1");
map.set("1", "String 1");
map.set(true, 5);

console.log(map.get(true));
console.log("size: ", map.size);

// iterable over map

let mapLanguages = new Map();

mapLanguages.set(0, "JAVA");
mapLanguages.set(1, "JS");
mapLanguages.set(2, "PHP");
mapLanguages.set(3, "NODEJS");
mapLanguages.set(4, "ReactJS");

// 1.
// for(let [k, v] of mapLanguages) {
//     console.log(k + " = " + v);
// }

// 2.
// for (let [k, v] of mapLanguages.entries()) { // entries
//     console.log(k + " = " + v);
// }

// 3.
// for (let key of mapLanguages.keys()) {
//     console.log(key + " = " + mapLanguages.get(key));
// }

// 4.
mapLanguages.forEach((v, k) => {
    console.log(k + " = " + v);
})

// new Map([iterable]) – creates the map, with optional iterable (e.g. array) of [key,value] pairs for initialization.
// map.set(key, value) – stores the value by the key, returns the map itself.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key, returns true if key existed at the moment of the call, otherwise false.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.




// SET 
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

console.log(set.size); // 3

for (let user of set) {
    console.log(user.name); // John (then Pete and Mary)
}


// new Set([iterable]) – creates the set, with optional iterable (e.g. array) of values for initialization.
// set.add(value) – adds a value (does nothing if value exists), returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.




// WeakMap and WeakSet
//  key phải là object(not primitives)

let weakMap = new WeakMap();
let key = {};
weakMap.set(key, "Hello WeakMap");

console.log(weakMap.get(key));

// err
// weakMap.set(1, "Abc");


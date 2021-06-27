//Có 2 kiểu cấu trúc dữ liệu trong JS
// + Object : cho phép tạo ra 1 single entity và lưu trữ theo key
// + Array: cho phép lưu trữ 1 tập hợp data  theo thứ tự

// Destructuring assignment is a special syntax that allows us to “unpack” arrays 
// or objects into a bunch of variables, as sometimes that’s more convenient.


// Array
console.log("===================ARRAY DESTRUCTURING===================")


let array = ["PHP", "JAVA", "JS"];

let [php, java, js] = array;
console.log(java);

console.log(array[1] == java);

let [one, two, three] = new Set([1, 2, 3]);
console.log(one);



// rest "..."
let [a, b, ...rest] = "abcdefghik".split(""); // .split() - convert string to array

console.log(a); // a
console.log(rest); // cde...k as array


// default value 

let [name = "Linh", age = 22] = [];
console.log(name);



// Object
console.log("===================OBJECT DESTRUCTURING===================")

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

// let { title, width, height } = options;

// console.log(title);  // Menu
// console.log(width);  // 100
// console.log(height); // 200

// title = property named title
// rest = object with the rest of properties
let { title, ...re } = options;

// now title="Menu", rest={height: 200, width: 100}
console.log(re.height);  // 200
console.log(re.width);   // 100



// Rest parameter

console.log("REST PARAMETERS")
function cal(...params) {
    let args = Array.from(params);
    let rs = args.reduce((acc, cur) => {
        return acc + cur;
    })
    console.log(rs);
}

cal(1,2);
cal(1,2,3,4);




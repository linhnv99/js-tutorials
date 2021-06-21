
// Note: This trong JS khác so với hầu hết các ngôn ngữ khác, 
// nó có thể tồn tại ở bất cứ hàm nào ngay cả khi nó k phải là 1 phương thức của obj.

/*
    This: là 1 keyword (là 1 ngữ cảnh) trong:
    
    + Method context: 
        this là chủ thể của đối tương chứa method đó. 
    vd: 
        let user = {
            name: "Linh",
            myFunc: funtion () { // call method
                console.log(this.name)// this = user
            }
        }
    + Funtion context:
        this đại diện cho global context (window), this phụ thuộc vào cách mà funtion được gọi.
    + Class context: 
        same as Java


*/


// - Funtion trong JS được coi là 1 object đăc biệt chúng đều có các method call, apply, bind. 
let animals = {
    name: "CAT",
    age: 20,
    getInfo: function () {
        console.log("Name: ", this.name, " - ", this.age);
    }
}

// 1. Bind()

console.log("=======Bind()=========");

let logAnimal = function (name) {
    console.log("- Before changing: " + this.name);

    this.name = name; // changed name 

    console.log("- After changing: " + this.name);
}

animals.getInfo(); // Name:  CAT  -  20

let log = logAnimal.bind(animals); // tạo ra 1 instance của logAnimal và ràng buộc với animals. gần như thêm 1 pro cho 1 obj
// có thể thay đổi thuộc tính của 1 obj

console.log("Log: ");
log("DOG");

animals.getInfo(); // Name:  DOG  -  20

// 2. Call()

console.log("=======Call()=========");

let logAnimal2 = function (name, age) {
    this.name = name;
    this.age = age;
    console.log(this.name + " - " + this.age);
}

logAnimal2.call(animals, "Bird", 22); // cho phép truyền arguments cho function 

// 3. Apply()

logAnimal2.apply(animals, ["Chicky", 100]); // cho phép truyền argument cho function là 1 mảng 


console.log("=================PRACTICE===============");
// Prac1.

function makeUser() {
    return {
        name: "John",
        ref: this
    };
}
/**
 *  Same as 
 * function makeUser() {
        return this;
    }
 * makeUser().name; // undefined
 */

let user = makeUser();
console.log("use call func: ", user.ref.name); // What's the result? // undefined
// console.log("use call func: ", user.ref); // window
let user1 = new makeUser();
console.log("use new Object: ", user1.name);
console.log("use new Object: ", user1.ref);

//Rs: this ở đây là thể hiện của 1 hàm 

// 
function makeUser1() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
}

let user2 = makeUser1();

console.log(user2.ref().name); // John




// Prac2
let u = {
    name: "Linh",
    ref: this
}
console.log(u.ref);


// Prac3
let obj = {};

function A() { return obj }
function B() { return obj }

let a = new A();
let b = new B();

console.log(a == b); // true
    
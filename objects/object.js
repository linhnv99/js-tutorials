/**
 * 
 * Ngoại trừ các kiểu primitive thì tất cả đều là object
 * 
 * 
 * 
 * 
 */

// 2 cách để khởi tạo object

let user1 = new Object(); // constructor
let user2 = {}; // literal

let student = {
    name: "Linh",
    age: 20,
    skills: ["Java", "Js", "ReactJs"],
    myFuntion: function () {
        console.log("My name is " + this.name + " - " + this.age);
    }
}

student.key1 = "new Value1"; // add properties for the object
student.key2 = "new Value2";

console.log(student.key1);
console.log(student.name);
console.log(student["age"]);

student.myFuntion();

// loop for key object
for (let key in student) {
    console.log("Key of student: ", key);
}



// việc gán 1 obj khác với kiểu dữ liệu nguyên thủy
// gán tham chiếu. 2(n) biến có thể tham chiếu vào cùng 1 ô nhớ.
// bất kì biến tham chiếu nào cũng có thể thay đổi giá trị của ô nhớ đó.

let user = { name: 'John' };

console.log("user.name = ", user.name);

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

console.log("user.name = ", user.name);
console.log("admin.name = ", admin.name);

console.log("================Cloning Object ... ================");

user = {
    name: "John",
    age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
    clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

console.log(user.name); // still John in the original object



console.log("====Use Object.assign(dest, src1, ...srcn) to copy object====");
let cloneObj = {};
Object.assign(cloneObj, user);
console.log(cloneObj)



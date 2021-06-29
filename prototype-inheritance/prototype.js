// prototype như là nội tại bên trong của 1 object và bị ẩn đi. prototype có thể là null hoặc tham chiếu đến object khác
// việc tham chiếu đó call prototype inheritance (gần giống như kế thừa trong java)


let person = {
    salary: 3000,
    getSalary() {
        console.log("Salary of person: ", this.salary);
    }
}

let teacher = {
    name: "John"
}
teacher.__proto__ = person; // tham chiếu prototype của teacher tới person, lúc này teacher sẽ có mọi properties cả person

teacher.getSalary(); // prototype của teacher đang tham chiếu tới person, khi call 1 property k tồn tại trong object hiện thời
// JS sẽ tự động chọc vào prototype để tìm kiếm

// Chú ý: 1 prototype object k thể tham chiếu tới 2 object khác.
// Hạn chế : prototype k tham chiếu vòng tròn (throw exception)
// vd: 
// let student = {
//     age: 22
// }
// student.__proto__ = teacher;

// person.__proto__ = student;

// console.log(teacher.age);


// This in prototype (k bị ảnh hương)
let animal = {
    walk() {
        if (!this.isSleeping) {
            alert(`I walk`);
        }
    },
    sleep() {
        console.log(this)
        this.isSleeping = true;
        console.log(this);
    }
};

let rabbit = {
    name: "White Rabbit",
    __proto__: animal
};

// modifies rabbit.isSleeping
rabbit.sleep();

console.log(rabbit.isSleeping); // true
console.log(animal.isSleeping); // undefined (no such property in the prototype)
console.log(rabbit.__proto__) //{ walk: [Function: walk], sleep: [Function: sleep] }


console.log("===========PROTOTYPE===========");

// Prototype: (default prototype là 1 object có 1 thuộc tính duy nhất là constructor tham chiếu trực tiếp tới hàm hiện thời)
// Prototype(nguyên mẫu): hiểu gần giốn như abstract class trong java. cung cấp các method chung cho 1 object đc khởi tạo từ func


function Person(name) {
    this.name = name;
}

let person1 = new Person("Linh");
let person2 = new Person("John");

Person.prototype.getName = function () {
    console.log("welcome,", this.name);
};

person1.getName();
person2.getName();

console.log(Person.prototype == person1.__proto__);

person1.__proto__.test = 5;

console.log(Person.prototype.test)
console.log(person2.test);


// Sự khác nhau giữa __proto__ và prototype

/*
    .__proto__: là nội tại ẩn đi trong mỗi object
    .prototype: là 1 object được tạo khi khởi tạo 1 function, default chỉ có 1 property duy nhất là constructor

    => về bản chất thằng __proto__ vẫn trỏ đến thằng .prototype

*/
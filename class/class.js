class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log("say hi");
    }
    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }
}
// Khi 1 instance của 1 class được khởi tạo. các property và method của class sẽ đc lưu tại prototype
let user = new User("Linh");

console.log(User.prototype.constructor === User);
console.log(User.prototype.sayHi == user.sayHi);

console.log(user.name);


// access modifier
// + public 
// + private( user #property)
// + protected( use _property)


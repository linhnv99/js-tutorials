
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


// ex2

let infos = {
    name: "Linh",
    age: 22,
    getInfo: function () {
        console.log("Hello " + this.name + " - " + this.age);
    }
}

setTimeout(infos.getInfo, 1000);//?


// ex3:
let group = {
    title: "Our Group",
    languages: ["JAVA", "JS", "ReactJS"],

    showList() {
        this.languages.forEach(
            language => console.log(this.title + ': ' + language)
        );
    }
};

group.showList();//?


// ex4

function test() {
    return
    {
        a: 5;
    }
}
test();

console.log(1/0) //Infinity

console.log(typeof 10);
console.log(typeof "");
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof true);
console.log(typeof 1234567890123456789012345678901234567890n);
console.log(typeof Symbol(1));

console.log(typeof function(){});
console.log(typeof []);
console.log("type of Number: ", typeof Number); //funtion



console.log("============COMPARE============");
console.log("null == undefined: ", null == undefined);
console.log("null === undefined: ", null === undefined);
console.log("10 == '10':", 10 == "10");
console.log("10 === '10':", 10 === "10");
console.log("1 == 1n", 1 == 1n);
console.log("1 === 1n", 1 === 1n); // number !== bigint



console.log("========================");

// Function

function myFuntion() {
    console.log("funtion");
}

// Object

var myObject = {
    name: "Linh",
    age: 22,
    myFuntion: function () {
        console.log(this.name);
    }
}
console.log(myObject.age);
console.log(myObject.myFuntion);
// console.log(myObject.myFuntion()); ???? undefined


console.log("========================");
// Array Object

var myArray = ['JAVASCRIPT', 'JAVA', "REACTJS"];

console.log(myArray);



/**
    Các kiểu dữ liệu trong JS

    Primitive: 
        + Number
        + String
        + Boolean
        + Undefined
        + Null (Root)
        + Symbol
        + BigInt // type recently added to language represent integer 
        
    Non-Primitive:(Complex Data)
        + Funtion
        + Object
        + Regex
 */
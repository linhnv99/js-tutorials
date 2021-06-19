console.log("===============NAMING FUNCTION================");

/*
    Function are actions. usually a verb.
    One function – one action.
    Funtions == Comments

    Funtion starting with:
        + get... return Value
        + calc... calculate something
        + create... create something
        + check... check something and return boolean

*/


console.log("================FUNCTION EXPRESSION================");

let myFunction = function (params) {
    console.log(params);
}
myFunction("hello");  // assign funtion to variable call function expression.

let myFunction2 = myFunction("Hi");
myFunction2;


console.log("================CALLBACK FUNTION================");

function myCallBackFuntion(conditions, showOK, showNo) {
    if(conditions) {
        showOK();
    } else {
        showNo();
    }
}

function showOk() {
    console.log("OK");
}

function showNo() {
    console.log("No");
}

let start = myCallBackFuntion(5 > 1, showOk, showNo);
start;


console.log("===========ARROW FUNTION=============");

let myArrowFunc = () => console.log("Arrow funtion");
myArrowFunc();
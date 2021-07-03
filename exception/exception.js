
// avaScript has many built-in constructors for standard errors: Error, SyntaxError, ReferenceError, TypeError and others
try {
    // console.log(abc);
    if (true) 
        throw new SyntaxError("new Error");

}catch(err) {
    console.log(err.message);
}finally {
    console.log("finally");
}


// custom error
class MyError extends Error {
    constructor(name, message) {
        super(message);
        this.name = name;
    }
}

function isEmpty(str) {
    
    if (str == "") 
        throw new MyError("emptyError", "Input is empty");

    return str;
}

try {
    isEmpty("");
}catch(err) {
    if (err instanceof MyError) 
        console.log(err.name + " - " + err.message);
}
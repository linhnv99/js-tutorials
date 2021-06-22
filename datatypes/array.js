// Array as a queue 
// Method: pop/push shift/unshift

let arr = ["JAVA", "JS", "REACTJS"];

console.log("Init: ", arr);

arr.push("NODEJS");
console.log("PUSH: ", arr);

arr.shift();
console.log("SHIFT: ", arr);

arr.pop();
console.log("POP: ", arr);

arr.unshift("PHP");
console.log("UNSHIFT: ", arr);


// coppy by reference 

let animals = ["DOG", "CAT"];

let animalsTmp = animals;

animalsTmp.push("BIRD");

console.log("Animals: ", animals);

// Array method

let languages = ["PHP", "GOLANG", "JAVA", "JS"];
console.log("Init: ", languages);

// delete 
delete languages[0]; //[ <1 empty item>, 'GOLANG', 'JAVA', 'JS' ]
console.log(languages); //

// splice(start, amountOfRemove, addElement1, addElement2...) // start < 0 => index = array.lengh - 1;

// languages.splice(-1, 1, "END");
languages.splice(0, 1, "NEW LANGUAGE");
console.log(languages)

// slice(start, end) // the same as splice

// concat()
languages.concat("ahah"); // [ 'NEW LANGUAGE', 'GOLANG', 'JAVA', 'JS' , 'ahah']
console.log(languages); // [ 'NEW LANGUAGE', 'GOLANG', 'JAVA', 'JS' ]




// Iterate

languages.forEach((item, index, languages) => {
    console.log(`${item} is at index ${index} in [ ${languages} ]`);
} )


// searching
// indexOf(item, from)
// lastIndexOf(item, from)

// find((item, index, arr) => {})
let rs = languages.find(it => it.length >= 2);
// filter((item, index, arr) => {})
//map((item, index, arr) => {})


// split() // convert string to array
// join() // convert array to string


// reduce((accumulator, item, index, array) =>{}, initial)// accumulator: rs 
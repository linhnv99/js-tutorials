// JSON

// JSON.stringify(Object): Convert Object to Json
// JSON.parse(Json): Convert Json to Object 

let infos = {
    name: "Linh",
    age: 22,
    getInfo: function (params) { // ignore to JSon
        console.log(name + " - " + age);
    } 
}

let infosJson = JSON.stringify(infos);
console.log("JSON: ", infosJson);

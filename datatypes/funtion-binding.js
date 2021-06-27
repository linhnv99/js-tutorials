let  infos = {
    name: "Linh",
    age: 22,
    getInfo: function () {
        console.log("Hello " + this.name + " - " + this.age);
    }
}

setTimeout(infos.getInfo, 1000);//undefined: vì lúc này this đang tham chiếu đến context TimeOut

// solution 1: a wrapper 

setTimeout(() => {
    console.log("Wrapper: ");
    infos.getInfo();
}, 1000);

// solution 2: Bind (build-in method of Function) .bind(context)
// example
// let user = {name: "Johny"};
// function getName() {
//     console.log("Binding: ", this.name);
// }
// let funcBind = getName.bind(user);
// funcBind();


let showInfo = infos.getInfo.bind(infos);
setTimeout(showInfo, 2000); // Hello Linh - 22
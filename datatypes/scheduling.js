
// setInterval: lặp lại theo khoảng thời gian chỉ định
// setTimeout: chạy sau khoảng thời gian được chỉ định

let timeOut = setTimeout(() => console.log("Hello"), 5000);

let interval = setInterval(() => console.log("Hi"), 2000);

setTimeout(() => {clearInterval(interval); console.log("Stop")}, 7000);
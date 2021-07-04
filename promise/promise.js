
// sync: đồng bộ - chạy 1 cách tuần tự từ trên xuống
// async: bất đồng bộ - chạy không theo thứ tự vd: setTimeOut(), setInterval(), fetch api, read file, ...


// let promise = new Promise(
//     function (res, rej) {
//         rej("Co loi xay ra");
//     }
// )
// promise
//     .then(mess => {
//         console.log(mess);
//     })
//     .catch(err => {
//         console.log(err);
//     })

console.log("====================")
// 1. Promise.resolve()
// 2. Promise.reject()
// 3. Promise.all() 
// -> return Promise

// let promise1 = new Promise(res => setTimeout(() => {
//     res([1])
// }, 1000));
// let promise2 = new Promise(res => setTimeout(() => {
//     res([2, 3]);
// }, 2000));

// Promise.all([promise1, promise2])
//     .then(data => {
//         let rs = new Array();
//         for (const d of data) {
//             rs.push(...d);
//         }
//         console.log(rs);
//     })


// async/await

async function f() {
    return 1;
}

// async - tra về 1 promise

f().then((rs) => console.log(rs)); // 1

// await dùng bên trong 1 async 


async function test() {
    let promise = new Promise((res, rej) => {
        setTimeout(() => {
            res("Linh");
        }, 2000);
    })
    let res = await promise;
    console.log(res);
    console.log("haha");
}
test();




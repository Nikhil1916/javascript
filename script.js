const cart = ['shoes','jeans'];

createCart(cart).then((res)=>{
    console.log(res, 1);
   return res;
})
// .catch((err)=>{
//     console.log(err);
// })
.then((r)=>{
    console.log(r, 2);
    return moveToshoppingCart(r);
})
// .catch((err)=>{
//     console.log(err, 'err2');
//     // throw Error("errp");
// })
.then((r)=>{
    console.log(r, 3);
})
.catch((er)=>{
    console.log(er,' final error');
})

;

function createCart(cart) {
    const promise =  new Promise((resolve,reject)=>{
        if(false) {
            setTimeout(()=>resolve('12345'),2000);
        } else {
            setTimeout(()=>reject(new Error('error found')),2000);
        }
    });
    console.log(promise);
    return promise;
}

function moveToshoppingCart(shopId) {
    return new Promise((res,rej)=>{
        if(true) {
            setTimeout(()=>{
                res(true);
            },2000)
        } else {
            setTimeout(()=>{
                rej(true);
            },2000)
        }
    })
};


const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});
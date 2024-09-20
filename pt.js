console.log("pt.js");

const promise = new Promise((resolve,reject)=>{
    if(true) {
        // setTimeout(()=>{resolve({
        //     'msg':'hurray'
        // })},3000);
        resolve({msg: 'hurrayy'});
    } else {
        setTimeout(()=>{reject({
            'msg':'noooo'
        })},3000)
    }
});
for(let i=1;i<1000;i++) {
    console.log("i");
}
console.log(promise);

promise.then((val)=>{
    console.log(val);
},(err)=>{
    console.log(err, 1);
})
.catch((err)=>{
    console.warn(err);
})
.finally((e)=>{
console.log(e, 'finallyu')
})
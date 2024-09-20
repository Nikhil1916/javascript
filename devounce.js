counter = 0;
function callApi() {
    console.log(this.counter++);
}

function doSomeMagic(fn) {
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn();
        },500);
    }
}
const betterFnc = doSomeMagic(callApi);

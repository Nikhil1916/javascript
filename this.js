// function type2() {
//     return(lname);
// }
// var lname = "chanwla";

// let obj = {
//     lname:'tiwari',
//     type2
// }

// console.log(obj.type2());

// let object = {
//     cricketer(){
//         console.log(this.name);
//     },
//     name: 'nikhil'
// }
// var name = 'okok';
// // console.log(object.cricketer());

// let obj2 = {
//     name:'smridhi'
// }

// // object.cricketer.call(obj2);

// Function.prototype.myCall = function(obj) {
//     let fnc = this;
//     obj.fnc = fnc;
//     return obj.fnc();
// }

// object.cricketer.myCall(obj2);


// Function.prototype.myBind = function(obj) {
//     let fnc = this;
//     // obj.fnc = fnc;
//     console.log(fnc);
//     return function() {
//         fnc.myCall(obj);
//     }
// }
// const bindedFnc = object.cricketer.bind(obj2);
// console.log(bindedFnc());

let user = {
    sayHi() {
        console.log(this.name);
    },
    name: 'nikhil'
}
// var name = 'hi';
// delete this.name;
setTimeout(user.sayHi.bind(user),1000);
user = {
    name:'nikhil2'
}

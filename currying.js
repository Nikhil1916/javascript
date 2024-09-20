 console.log("currying.js");

 const multiply = (x,y) => {
    console.log(x*y);
 }
//  multiply(2,3);

//  const betterM = function(x) {
//     return function(y) {
//         console.log(x*y);
//     }
//  }

//  const bM = betterM(2);
//  console.log(bM(3));

const bindedCurryFnc =  multiply.bind(this,2);
console.log(bindedCurryFnc(3));
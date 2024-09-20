const obj = {
    name:'nikhil',
    intern:{
        name:'smridhi',
        intern:{
            name:'parul'
        }
    },
    age:23
}

function deepCopy(obj) {
    const ans = {};
    for(let key in obj) {
        if(typeof obj[key] == 'object') {
            ans[key] = deepCopy(obj[key]);
        } else {
            ans[key] = obj[key];
        }
    }
    return ans;
}

let copy = deepCopy(obj);
console.log(copy,obj);
copy.intern.name = 'bye';
copy.intern.intern.name = 'hie';
console.log(copy,obj);
document.querySelector("#grandparent").addEventListener("click",()=>{
    console.log("grand parent called");
},true);
document.querySelector("#parent").addEventListener("click",(e)=>{
    console.log("parent called");
// e.stopPropagation();
},false);
document.querySelector("#child").addEventListener("click",()=>{
    console.log("child called");
},true);
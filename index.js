const app = require("./app");

console.log(app.c());


let a = 20
let b = 30

console.log(a+b);


let data = [
    1,2,3,4,5,6,7
]

let x = 20
let y = "20"

if(x===y)
{
    console.log("both same");
    
}
else 
{
    console.log("both not same");
}

data.filter((item)=>{console.log(item);
})
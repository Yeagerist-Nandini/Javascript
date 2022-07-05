// 1.functions are first class citizen

// variable assignment 
// let a=[10,20,30,40];
// let b=a;
// console.log(b);

function chotaFn()
{
    console.log("hello iam a chota function");
}

let anfn=function()
{
    console.log("boooooo");
    // return chotaFn;
return function inner() {console.log("mahi kutti");} //iska mtlb sirf function ka address return hua h 
}

anfn();
let rval=anfn();
console.log(rval);
rval();



//2.function variable
// let secondName = function originalname()
// {
//     console.log('Iam original');
// }

// secondName();
//originalname();//error


//3.IIFE-> Immediately invoked function expression

console.log("before");

(function drawBoard() {
    console.log("board is immedialtely drawn");
})();

console.log("after");


//4. anonymous function

// console.log("before");

// (function ()
// {
//     console.log("board is immedialtely drawn");
// })();

// console.log("after");

// let secondName = function ()
// {
//     console.log('Iam original');
// }

// secondName();


//5. Arrow function
//this is undefined
//no use of call,apply,bind
//No arguments
//dont use as constructor

//can use map,filter etc.
let x=2;
fun3=()=>{
    x=x*x;
    console.log(x);
}
fun3();
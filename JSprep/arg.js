// function fn(param1,param2) {
//     console.log("Inside fn",param1,param2);
// }
//if there is nothing there is-> undefined
fn("Hello","Hi");
fn("Hello");
fn();
fn("Hi","Hell0","Bye");


//arguments
function fn()
{
    console.log(arguments);
}
//hum jitni bhi args pass krte h vo sab arguments arr m chale jaate h
//or unke copy param1,param2.. m store hote h


function fun(a,b)
{
    console.log(a+" "+b);
    console.log(arguments); //like array but not array
    let res=Array.from(arguments);  //how to make an array
    let sq=res.map(x=>x*x);
    console.log(sq);
}

fun(10,20,30);
fun(10,20);
fun(10);
fun();

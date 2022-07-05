//all the objects,arrays,function,string,bool,no are the chidren of its class
//while declaring anything from above we inherit from its class


//func definition
function sayHI(name)
{
    console.log("My Name is",name);
}

//function invocation ->function runs only when it is called
let rVal=sayHI('Nandini'); //undefined
console.log(rVal);
 
let arr=[10,20,30,40];
let obj={firstName : "Nandini"};

sayHI(10);
//reference type
sayHI(arr);
sayHI(obj);
sayHI(sayHI);//function is also a variable in js

console.log(sayHI('Mahi'));//undefined 
sayHI(); //undefined
sayHI(chotaFunction);


function chotaFunction() //address->8k
{
    console.log("I am chota function");
}

function hello(name) 
{
    console.log("my Name is",name);
    name();//print the function store at that address
}

hello(chotaFunction); 
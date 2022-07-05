//In js memory allocation for functions and others done first then code executes
//that's why the last value will be the value of the function
//functions are created in heap and address is stored in stack
//no function overloading in js
console.log("script started");

imReal();
//1.   
//suppose it's allocated the memory of 8k and pointer will be on 8k
function imReal() {
    console.log("I'am Real");
}

//2.
//and it's allocated the the memory of 16k then pointer will point at 16k
//that's why always the imreal 2 will be executed when it called
function imReal() {
    console.log("He isn't real->I'am the real");
}

imReal();

//In Js any code runs in executed context(no main in js)
//default execution context is global execution context  
//jab function call hota h to another execution context create hota h
//execution context k two parts hote h ->1.memory allocation 2.code execution
//memory allocation ->1.function definition ->memory allocation
//                    2.variable ->set undefined 


//jo code function m nhi likha hota vo global code hota h
//global code runs in global execution context 

console.log("before declaration", a);//in gec ->a=undefined
var a;
console.log("after declaration", a);//in gec ->a=undefined
a = 10;
console.log("after intialization", a);//in gec->a=10


function fn() {
    console.log("before declaration", a);//in ec ->a=undefined
    var a;
    console.log("after declaration", a);//in ec ->a=undefined
    a = 10;

    if(true)
    {
        var a=30;
        console.log('a',a);//op-30
    }
    console.log("after intialization", a);//in ec->a=10
}

fn();

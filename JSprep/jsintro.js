console.log("hello world");


var a;  //first the variable is intialised with undefined
console.log(a);  // undefined
a=20;
console.log(a); 
a="Hello"; //dynamic behavior of js
a=true;
a=null;
console.log(a);
//JS is a synchronous lang (line by line chalti h) and a single threaded lang  //JS is a dynamic lang 


//problems with var

//1. Redeclaration
var b=20;
var b="I am string"; // use let instead


// scoping -func scoping and block scoping
//let is block scoped
//2. var is func scoped
if(10%2==0){
   var c=2;
   console.log(c);
}
console.log(c);  //can access outside if
//never use var use let instead 



//const => no redeclaration and no redefinition
const j=10;
console.log(10);

// const g;
// g=2;// not possible coz g is undefined
// console.log(g);//error



// --------------------------------------------------------------------------





//loops and if else

let flag=true;
var num=13;

for(let i=2;i*i<=num;i++)
{
    if(num%i==0){
    flag=false;
    break;
    }
}

if(flag)
console.log("num is prime",num);
else
console.log("num is not prime");



// ---------------------------------------------------------------------------


//strings
let str="pepcoders";
let size=str.length; 

// substring//
let slicedstr=str.slice(3,7);  //last idx is excluded
let subs=str.substr(3,4);  //4-> is the length of the word required
//both will print 'code'


//replace//
let sayHello='hello nandu';
sayHello.replace('hello','bye');  //bye nandu

//upper and lower case//
let text1="hello world";
text1=text1.toUpperCase();
let text2=text1.toLowerCase();

//concatenation //
let firstStr="mahi";
let secondStr="jaiswal";
firstStr.concat(' ',secondStr);// mahi jaiswal


//trim method//
// it trims spaces before and after string
let text='  hello shiba  ';



//------------------------------------------------------------------------------


//functions
//functions are known as first class citizen in JS
//we can treat functions as variable in JS

//this also known as func expression
let sayHi=function()
{
    console.log("hi");
}//anonymous function

sayHi();


//IIFE (Immediately invoked function expression)
//also first class and anonymous
let adding=(function(a,b){
    console.log(a+b);
    return a+b;
})(10,20);

console.log(adding);



function add(a,b)
{
    let sum =a+b;
    console.log(sum);
}

add(4,5);  // function invocation (calling)

function sub(a,b)
{
    let diff=a-b;
    return diff;
}

let diff =sub(6,4);
console.log(diff);





//---------------------------------------------------------------------------------


//Arrays
//In JS you can put any kind of data in the array
let arr=[1,"Hello",3,true];
console.log(arr);

//array methods
let cars=['bmw','jaguar','lamborghini'];
cars.length;

//replace an element in an array
cars[1]='Bentley';
// console.log(cars);

//add a new element to an array
cars[3]='mercedes';
console.log(cars);

//array manipulation methods

//pop()  //it takes ouy element from the end of the array
let poppedCar=cars.pop();
console.log(poppedCar);

//push() //it adds an element at the end of the element
cars.push('audi');
console.log(cars);

//shift - removes element from the starting of the array
let shiftedCar=cars.shift();
console.log(shiftedCar);
//unshift - it adds an element at the starting of an array without removing any element 
cars.unshift('ford');
console.log(cars);




//----------------------------------------------------------------------------------------------

//object

//key value pair

//to decalre an object

let obj={};

let cap={
    name:'steve',
    lastName:'Rogers',
    friends: ['bucky','tony stark','natasha'],
    age:150,
    isAvenger:true,
    address:{
        state:'new nork',
        country:'usa',
        city:'manhatten'
    },
    
    sayHI:function(){
        console.log('hi captain');
    }
}

console.log(cap);
console.log(cap.friends); //dot notation
console.log(cap['address']);  //bracket notation
cap.sayHI();

//update object
cap.isAvenger=false;
//create something in the object
cap.movies=['first avenger','endgame','age of ultron'];  

//delete a property
delete cap.age;
console.log(cap);

//special loop for objects (For in loops)

for(let key in cap)
{
    console.log("key:",key,"val:",cap[key]); //dot notation is not valid
}




//---------------------------------------------------------------------------------------------

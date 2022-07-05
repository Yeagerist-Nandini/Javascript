//var

//reassign
//function scope 
//can redeclare ,you can access a var before declaration
var a;
a=10;
var a;
console.log(a);



//let

//before declaration -> we cant access let before declaration and intialization ->temporal dead zone(tdz)
// block scope
//cant redeclare  

// console.log(b);
let b;
console.log(b);                    
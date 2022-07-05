// any function that is passed as an argument function
// any function that is called after has finished executing

const { readFile } = require("fs");

function fistName(firstname,cb)
{
    console.log(firstname);
    cb("Gupta");
}

function lastName(lastname) {
    console.log(lastname);
}

fistName("Ritu",lastName);


//Asynchronous way of reading data
const fs=require('fs');

console.log("Before");

fs.readFile("ff1.txt",cb);
function cb(err,data)
{
    if(err)
    console.log(err);
    
    console.log(""+data);
}

console.log("after");




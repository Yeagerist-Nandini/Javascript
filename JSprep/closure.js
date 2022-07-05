///--closure is a feature given in js
//A closure is the function bundled together with reference to its surrounding state
//a closure gives u access to an outer functions scope from an inner function

//ex-1
function outer(first)
{
    console.log("inside outer");
    return function inner(second)
    {
        console.log("inside inner");
        return first*second;
    }
}

let rVal=outer(2);
console.log("before calling rval that conatins inner");
let ans=rVal(4);
console.log(ans);
//op
//inside outer
//before calling rval that contains inner
//inside inner 
//8

 

//ex2-
function enterFirstname(first)
{
    return function enterLastName(last)
    {
        return function enterAge(age)
        {
            return function print(){
            console.log("your name is "+first+last+"and your age is"+age);
            }
        }
    }
}


let lname=enterFirstname("mahi");
let age=lname("jaiswal");
let detail = age(25);
detail();


//ex3-
function fe()
{
    console.log('1243');
    return   function fe()
    {
        return 2;
    }
}

let f=fe();
console.log(f());



//ex4-
// function OUTER()
// {
//     var arr=[];
//     for(var i=0;i<3;i++)
//     {
//         arr.push(function (){
//             console.log(i);
//         })
//     }
//     return arr;
// }

// var a=OUTER();
// a[0]();
// a[1]();
// a[2]();
//op-3 3 3
//now how can we get 0 1 2 as an op


//solution 1-
// function OUTER()
// {
//     let arr=[];
//     for(let i=0;i<3;i++)
//     {
//         arr.push(function (){
//             console.log(i);
//         })
//     }
//     return arr;
// }

// let a=OUTER();
// a[0]();
// a[1]();
// a[2]();
//0 1 2 



//solution 2-
function OUTER()
{
    var arr=[];
    for(var i=0;i<3;i++)
    {
        function OUTER(){
        var j=i;
        return function()
        {
            console.log(j);
        }
       }
       arr.push(OUTER());
    }
    return arr;
}

var a=OUTER();
a[0]();
a[1]();
a[2]();
//IIFE=> immediately invoked function execution 

// (function(){
//    let u= prompt("hello! thanks for visiting our site");
//    alert(u);
// })();

// (function () {
//     let timeunits = prompt("How much to count");
//     let interval = prompt("log after how much interval");

//     //calls the hadlecall function after every interval seconds 
//     let iid = setInterval(handlecalls, interval*1000);
//     // return an id used to stop calling via clearInterval 

//     handlecalls.orgTU=timeunits;//functions can be used as a store of properties

//     function handlecalls() {
//         console.log(timeunits + " left");
//         timeunits -=interval;

//         if (timeunits == 0) {
//             clearInterval(iid);
//             alert(handlecalls.orgTU+" has been counted.");
//         }
//     }
// })();




//closure
// function powerCreater(exp)
// {
//     return fun=function(base)
//     {
//         let rv=Math.pow(base,exp++);
//         return rv;
//     }
// }


// let squarer=powerCreater(2);
// let val=squarer(8);
// console.log(val);

// console.log(squarer(8));
// console.log(squarer(8));







function powerCreater(obj)
{
    return fun=function(base)
    {
        let rv=Math.pow(base,obj.exp);
        return rv;
    }
}

let obj={
    exp:2
}


let squarer=powerCreater(obj);
let val=squarer(8);
console.log(val);

obj.exp=3;
val=squarer(8);
console.log(val);
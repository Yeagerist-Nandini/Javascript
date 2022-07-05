const { runInThisContext } = require("vm")

//polyfill->implementation of a function which i dont have



//for each
Array.prototype.myforEach= function(cb){
    for(let i=0;i<this.length;i++)
    {
        cb(this[i]);
    }
}



//some 
Array.prototype.mySome= function(cb){
    for(let i=0;i<this.length;i++)
    {
       if(cb(this[i]))
       return true;
    }
    return false;
}


//every
Array.prototype.myEvery= function(cb){
    for(let i=0;i<this.length;i++)
    {
       if(!cb(this[i]))
       return false;
    }
    return true;
}


//findIndex
Array.prototype.findIdx=function(cb){
    let newarr=[];

    for(let i=0;i<this.length;i++)
    {
        if(cb(this[i]))
        {
            newarr.push(i);
        }
    }
    return newarr;
}



//concat
Array.prototype.myConcate=function(arr)
{
    let newarr=this;

    for(let i=0;i<arr.length;i++)
    {
        newarr.push(arr[i]);
    }
    return newarr;
}



//reduce


let arr=[1,2,3,4,5,7];
let arr1=[2,4,6,8];
function even(params) {
    return params%2==0;
}

console.log(arr1.myEvery(even));
console.log(arr.mySome(even));
console.log(arr1.findIdx(even));
// arr.myforEach(even);


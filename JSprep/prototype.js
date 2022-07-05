Array.prototype.sum=function() 
{
    let sum=0;
    for(let i=0;i<this.length;i++)
    sum+=this[i];

    console.log(sum);
}
//this -> is a predefined keyword in js (jo function call krta h vhoi this hota h)
//that referes to the entity 


Array.prototype.sayHello =function(elem)
{
    console.log("Hello "+elem);
}

let arr1=[1,2];
let arr2=[3,4];

arr1.sayHello('arr1');
arr2.sayHello('arr2');
arr1.sum();
arr2.sum();


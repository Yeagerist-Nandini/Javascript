//High Order function ->are the functions that receives function as an argument or returns functions 
// concat reduce hw



//forEach-> works like for loop--------------------------------------------------------------------------------------------------------
const arr1=['a','b','c','d'];

function printEle(ele)
{
    console.log(ele);
}
arr1.forEach(printEle);





// some -> return true if only one elelment in the arr pass the test implemented by the provided function------------------------------------ 
arr=[2,2,4,7,8,14];
arri=[12,4,6,8,10];
function checkeven(params) {
    return params%2==0;
}

console.log(arr.some(checkeven));




//every -> return true if all the elelment in the arr pass the test implemented by the provided function-------------------------------------

console.log(arr.every(checkeven));
console.log(arri.every(checkeven));




//findIndex-> return the idx of all the element which satisfy the provided function----------------------------------------------------------

function isLarge(params) {
    return params >13;
}

console.log(arr.findIndex(isLarge));


//reduce->




//concat->it concats two or more arrays.this method doesnt change the original array---------------------------------------------------------

let a=['a','b','c'];
let b=['d','e','f'];

let c=a.concat(b);
console.log(c);
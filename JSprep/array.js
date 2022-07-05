let arr=[1,2,3,4,5];
console.log(arr);

// for(let i=0;i<arr.length;i++)
// console.log(arr[i]);

// //add last 
// arr.push(10);
// console.log(arr);
// //add first
// arr.unshift(20);
// console.log(arr);
// //remove last
// arr.pop();
// console.log(arr);
// //remove first
// arr.shift();
// console.log(arr);

let PartOfthatArr=arr.slice(1,3); //prints 1,2 excludes nth element 
console.log(PartOfthatArr);

//first param->starting idx
//last param->kitne delete krne h
//original change kr dega
arr.splice(2,1);  //generic delete  (2 se leke 1 element delete kr dega)
console.log(arr);

//union of two array
let arr1=[1,4,3,6,5];
let arr2=[1,3,100,200];

for(let i=0;i<arr2.length;i++)
{
    // let f=false;
    // for(let j=0;j<arr1.length;j++)
    // {
    //     if(arr1[j]==arr2[i])
    //     {
    //         f=true;
    //         console.log(f);
    //         break;
    //     }
    // }

    // if(f==false)
    // arr1.push(arr2[i]);

    if(arr1.includes(arr2[i])==false)
    arr1.push(arr2[i]);
}

console.log(arr1);


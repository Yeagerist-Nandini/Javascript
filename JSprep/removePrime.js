let arr=[5,7,19,12,13,14];
arr=[1,2,3,4,5,6,7,8,9];


function isPrime(n)
{
    for(let j=2;j*j<=n;j++)
    {
        if(n%j==0)
        {
            return false;
        }
    }
    return true;
}


for(let i=0;i<arr.length;i++)
{
    if(isPrime(arr[i]))
    {
      arr.splice(i,1);
      i--;
    }    
}

arr=[1,2,3,4,5,6,7,8,9];

for(let i=arr.length-1;i>=0;i--)
{
    if(isPrime(arr[i]))
    {
      arr.splice(i,1);
    }    
}

console.log(arr);
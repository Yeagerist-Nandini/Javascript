
function add(a,b)
{
    console.log(a+b);
}

function sub(a,b)
{
    console.log(a-b);
}

function multi(a,b)
{
    console.log(a*b);
}

function div(a,b)
{
    console.log(a/b);
}

function fac(a)
{
    if(a==1)
    return 1;

    return a*fac(a-1);
}
function facto(a)
{
    console.log(fac(a));
}

module.exports={
    addition : add,
    substract : sub,
    multiply : multi,
    division : div,
    factorial : facto
}

//module.exports is a method provided by nodejs by which you can use your functions in key value pair
//you will us eyour functions with the keys you have
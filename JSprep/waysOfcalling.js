let obj1={
    fn:function(frnd1,frnd2){
        console.log("he is "+this.fname+",his age is "+this.age+" .");
        console.log(this.fname+" says hello to "+frnd1+" .");
        console.log(this.fname+" says hello to "+frnd2+" .");
    },
    fname:"nandini",
    age:35
};

// obj1.fn("mahi","laav");//1
//2
let o2={
    fname:"neha",
    age:33
};

// obj1.fn.call(o2,"maa","papa");

//3
obj1.fn.call({
    fname:"neha",
    age:33
},"maa","papa");

//call is a function.it is available on all functions.it can be used to call the function 
// the use case is ,if you want to override the default this 


//4
// obj1.fn.apply(o2,["mm","ss","sp"]);

//apply is similar to call,it just uses an arr to pass arguments


//5
// let boundFunction=obj1.fn.bind(o2,"mm","ss","sp");
// boundFunction("sumeet");
//bind is a function like call ,it just returns a function 



Function.prototype.mycall = function()
{
    let orgfun=this;
    let args=Array.from(arguments);
    let orgthis=args[0];
    let orgargs=args.slice(1);

    // orgfun.apply(orgthis,orgargs);

    orgthis.fun=orgfun;  //creating a function in objrct o2 
    orgthis.fun(...orgargs);
    delete orgthis.fun;  //deleting the created function in o2
}

obj1.fn.mycall(o2,'aa','ss');




Function.prototype.myapply=function()
{
    let orgfun=this;
    let args=Array.from(arguments);
    let orgthis=args[0];
    let orgargs=args[1];

    orgthis.fun=orgfun;  //creating a function in objrct o2 
    orgthis.fun(...orgargs);
    delete orgthis.fun;  //deleting the created function in o2
}
obj1.fn.myapply(o2,['qq','df','fk']);



Function.prototype.mybind=function(){
    let orgfun=this;
    let args=Array.from(arguments);

    let boundfun=function()
    {
        let thisForOrgFun=args[0];
        let argsForOrgFun=args.slice(1);
        let argsforInvocation=Array.from(arguments);
        argsForOrgFun=argsForOrgFun.concat(argsforInvocation);

        orgfun.apply(thisForOrgFun,argsForOrgFun);
    }

    return boundfun;
}


console.log(obj1.fn.mybind(o2,"aa","ss","ff")());
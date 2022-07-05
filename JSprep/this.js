//1
function person(name,age)
{
    this.name=name;
    this.age=age;
    this.sayHi=function(fi){
        console.log(this.name+"["+this.age+"] say hii to "+fi);
    }
}

let p1=new person("sumeet",34);
p1.sayHi("pankaj");


//2
//when we call function in normal way then this passes to the function is the global/window object automatically
//so all the global vars are in global obj
//global var->jo function k bahar hote h or (jo function m hote h lekin vo var,let,const na ho)
//first function check in function if a is present then it will check in global obj(this)

// function func()
// {
//     b=9;
//     a=10;  //->same as this.a=10;
//     console.log(a);
//     console.log(b);
// }

// func();
// console.log(a);
// var b;



// Object.fun()->this is obj 
// p1=new person() ->this is new obj
// call,bind,apply 
// fun1()->this points to global Object

// a=1;
// b=2;
// c=3;

function fun()
{
    console.log(this.a+" "+this.b+" "+this.c);
}

let obj={
    a:10,
    b:20,
    c:30,
    fun1:function()
    {
        console.log(this.a+this.b+this.c);
    },
    fun2:fun,
    fun3:()=>{
        console.log(this.a+" "+this.b+" "+this.c);
    }
};

let o2={
    a:1000,
    b:2000,
    c:3000
};

obj.fun1();
fun();
obj.fun2();
obj.fun3();

obj.fun1.call(o2);
fun.call(o2);
obj.fun2.call(o2);
obj.fun3.call(o2);


//browser enviroment & non strict mode
//this keyword refers to the cuurent object
//this=>obj through which a func is called

// console.log(this);  //windows

// function fn()
// {
//     console.log(this);      //windows
// }

// fn();

// let obj1={
//     name:'mahi',
//     func: fn
// }

// obj1.func() //self obj


// function fun(){
//     console.log(this);
//     function abc(){
//         console.log(this);
//     }
//     abc();  //global
// }


//method 1:bind function 
// function fun(){
//     console.log(this);
//     function abc(){
//         console.log(this);
//     }
//     let ret=abc.bind(this);
//     ret();  
// }

// let obj2={
//     name:'mahi',
//     func:fun
// }

// obj2.func();

//method 2:arrow function
//iska apna this nhi hota to ye apne parent ka this utha leta h
function fun(){
    console.log(this);
    abc= ()=>{
        console.log(this);
    }
    
    abc();
}

let obj2={
    name:'mahi',
    func:fun
}

obj2.func();

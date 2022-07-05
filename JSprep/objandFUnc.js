let obj={
    fun1:function(){
        console.log("This man is called " +this.fullName+" ,His age is "+this.age);
    },
    fun2:function(){
        console.log("This man is called " +obj.fullName+" ,His age is "+obj.age);
    },
    fun3:function(){
        console.log("This man is called " +fullName+" ,His age is "+age);
    },
    fullName:"summet",
    age: 34
};

obj.fun1();
obj.fun2();
// obj.fun3();
//this passes automatically

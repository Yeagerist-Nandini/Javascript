//array

let arr=['ase','1','un','mahi'];
// let a=arr[0],b=arr[1];

// let [a,b,c,d]= arr;
// console.log(a,b,c,d);

// let [a,b,,d,extra]= arr;
let [a,b,,d,extra='abcd']= arr;
console.log(a,b,d,extra);





//object
let obj={
    name:'mahi',
    state:'delhi',
    country:'india'
}

// let name=obj.name
// let state=obj['state']

// let {name,state,country}=obj

// let {name,state,country,xtra='default'}=obj

let {name:firstName,state,country,xtra='default'}=obj


console.log(firstName,state,country,xtra);



//nested obj

let obj2={
    Name:'mahi',
    add:{
        country:'india',
        state:{
            code:'53',
            pin:'1100'
        }
    }
}

let {Name}=obj2

// let {add:{country:abcd}}=obj2
let {add:{state:{code:abcd}}}=obj2

console.log(abcd)
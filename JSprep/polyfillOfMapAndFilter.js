//map
let arr = [5, 7, 19, 12, 13, 14];

function squarer(x) { return x * x; }

function cuber(x) { return x * x * x; }

//map impementation
//func as an argument
// return eke new function

Array.prototype.myMap=function(cb) {
    let newArr = [];

    for (let i = 0; i < this.length; i++) {
        let ans = cb(this[i]);
        newArr.push(ans);
    }
    return newArr;
}

let newarr = arr.myMap(squarer);
let cubearr = arr.myMap(cuber);
console.log(newarr);
console.log(cubearr);




//filter
//hof function 
//it takes a function ->test function ->returns true/false
//if function return true then we will add the element to the new array
let arr1 = [1, 3, 5, 6, 7, 8];

function oddTest(number) {
    return number % 2 == 1;
}

function evenTest(number) {
    return number % 2 == 0;
}


Array.prototype.myfilter = function(cb) {
    let newarr = [];

    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            newarr.push(this[i]);
        }
    }

    return newarr;
}

let odd = arr1.myfilter(oddTest);
let even = arr1.myfilter(evenTest);
console.log(odd);
console.log(even);
//function as parameter 
let fs = require("fs");

// function primeSeive(phandler,nphandler)
// {
//     let oarr=this;

//     for(let i=0;i<oarr.length;i++)
//     {
//         let num=oarr[i];

//         let isprime=true;
//         phandler.calledforthefirsttime=true;
//         nphandler.calledforthefirsttime=true;

//         for(let div=2;div*div<=num;div++)
//         {
//             if(num%div==0){
//             isprime=false;
//             break;
//             }
//         }

//         if(isprime)
//         phandler(num);
//         else
//         nphandler(num);
//     }
// }

// Array.prototype.sieve=primeSeive;

// let arr=[11,18,34,37,49,53,71,84,97];
// arr.sieve(logAllprimes,logAllNonprimes);

// function logAllprimes(num)
// {
//     if(logAllprimes.calledforthefirsttime==true)
//     {
//         if(fs.existsSync("prime.txt"))
//         fs.rmSync("prime.txt");

//         logAllprimes.calledforthefirsttime=false;
//     }

//     fs.appendFileSync("primes.txt",num+" ","utf-8");
// }

// function logAllNonprimes(num)
// {
//     if(logAllNonprimes.calledforthefirsttime==true)
//     {
//         if(fs.existsSync("non-prime.txt"))
//         fs.rmSync("non-prime.txt");

//         logAllNonprimes.calledforthefirsttime=false;
//     }

//     fs.appendFileSync("non-primes.txt",num+" ","utf-8");
// }





Array.prototype.strHandler = function (lsHandler, ssHandler) {
    let arr = this;

    for (let i = 0; i < arr.length; i++) {
        let s = arr[i];
        if (s.length > 40)
            lsHandler(arr[i]);
        else
            ssHandler(arr[i]);
    }

    return this;//for chaining
}


let strr = ["My name is Sumeet Malik. I am a teacher. I teach programming.",
"I'am mahi jaiswal. I'am a good girl.",
"India won in Australia. England won't",
"India has gone too far with usa. It's time to stop. Hello Usa"];
strr.strHandler(lsHandler, ssHandler);

function lsHandler(sarr) {
    let arr = sarr.split(".");
    arr = arr.filter(s => s.length > 0);
    arr = arr.map(s => s.trim());

    // console.log(arr);
    let i = 0, j = arr.length - 1;

    while (i <= j) {
        let temp = arr[i];
        arr[i] = arr[j];              //arr=arr.reverse();
        arr[j] = temp;
        i++;
        j--;
    }

    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str = str + arr[i] + ". ";                //str=arr.join(". ");
    }

    console.log(str);
}

function ssHandler(sarr) {
    let arr = sarr.split(".");
    arr = arr.filter(s => s.length > 0);
    arr = arr.map(s => s.trim());
    arr=arr.map(s=>s.split(" "));
    arr=arr.map(s=>s.reverse());
    arr=arr.map(s=>s.join(" "));
    arr=arr.join(".");
    console.log(arr);
    // for (let i = 0; i < arr.length; i++) {
    //     let k = 0, j = arr[i].length - 1;
    //     let s = arr[i];

    //     while (k <= j) {
    //         let temp = s[k];
    //         s[k] = s[j];
    //         s[j] = temp;
    //         k++;
    //         j--;
    //     }
    // }

    // let str = "";
    // for (let i = 0; i < arr.length; i++) {
    //     for(let j=0;j<arr[i].length;j++)
    //     {
    //         str+=" "+arr[i][j];
    //     }
    //     str+=".";
    // }
    // console.log(str);
}


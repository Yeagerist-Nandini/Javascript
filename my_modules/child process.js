const cp=require('child_process');

// console.log('trying to open calculator');
// cp.execSync('calc');
// console.log('calc opened');

// cp.execSync('start chrome'); // to open chrome

// cp.execSync('code'); // to open vs code

let op=cp.execSync('test.js');
console.log(op);

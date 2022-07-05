//File System Module-
//We will be reading ,writng,updating,deleting files from our script

const fs=require('fs');
 
//reading from a file
// let content=fs.readFileSync('f1.txt');
// console.log('this is fi data ' +content);

//writing to a file
// //if the file passed doesnt exists it creates a new file and writes to it
// fs.writeFileSync('f2.txt','hello form f2');

// fs.writeFileSync('f1.txt','hello form f1'); //overwrite the data of f1 
 

//append data to a file
// fs.appendFileSync('f1.txt',' fucking bastards ');

//delete a file
//unlink sync method
// fs.unlinkSync('f2.txt');
// console.log('file removed');


//* Directories *//

//create
//make directory
// fs.mkdirSync('myDir');

//delete
//remove directory
// fs.rmdirSync('myDir');


//path
//to check whether a directories exist or not we can use existSync method
let doesexi=fs.existsSync('myDir');
console.log(doesexi);


//stats of a path (details of a folder)
let states=fs.lstatSync('myDir');
console.log(states);



console.log('isFile?',states.isFile()); //isfile is a method to check whether a passed path is a file or not
console.log('isDirectory?',states.isDirectory());//isdirectory is a method to check whether a passed path is a directory or not


//used to check the content of a directory
// let path ='D:\\devpep\\node modules\\myDir';
// let folderContent=fs.readdirSync(path);
// console.log(folderContent);

//copy files
const path=require('path');
//src folder , dest folder
let destf='D:\\devpep\\node modules\\myDir2';
let srcf='D:\\devpep\\node modules\\f1.txt';

let  tobeCopied =path.basename(srcf);//real name of the file
console.log(tobeCopied);//f1.txt

let destpath=path.join(destf,tobeCopied);
console.log(destpath);

fs.copyFileSync(srcf,destpath);
console.log('file copied');

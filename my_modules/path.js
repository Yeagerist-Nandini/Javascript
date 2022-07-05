const path=require('path');


//ext name is a function that will get the extension from the path of a file
let ext =path.extname("D:\\devpep\\node modules\\f1.txt");
console.log(ext);

//tells th real name of a file
console.log(path.basename('D:\\devpep\\node modules\\f1.txt'));

//gets the path of curr directory and curr file on which we are working
console.log(__dirname);
console.log(__filename);

 
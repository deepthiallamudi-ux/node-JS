import { unlinkSync, writeFileSync } from "fs";
import { writeFile, unlink } from "fs/promises";
// writeFileSync('./newfile1.txt',"hello world"); 
// console.log("file created");

// console.log("after file creation");
writeFile('./newfile1.txt',"hello world", () => {
  console.log("saved file");
});
console.log("after file creation");
 unlink('./newfile1.txt')

await writeFile('./newfile2.txt',"hello world2");
console.log("file2 created");


await unlink('./newfile2.txt')
console.log("file deleted");

writeFileSync('./newfile3.txt',"hello world3");
console.log("file3 created");
unlinkSync('./newfile3.txt');
console.log("file3 deleted");


import os from 'os';
const os=require('os');
console.log(os.freemem());
console.log(os.platform());
console.log(os.homedir());
console.log(os.type());



// /.mjs is used when we get error in .js file like "SyntaxError: Cannot use import statement outside a module" difference btwn .js and .mjs is that .mjs is used for ES6 modules while .js can be used for both CommonJS and ES6 modules depending on the environment and configuration.

// file system is used to perform operations on files like create, read, update, delete files. when we use fs module it is synchronous in nature but when we use fs/promises it is asynchronous in nature.file system is used when we want to perform operations on files in our application.

// npm need not to be installed separately as it comes bundled with Node.js. when we install Node.js, npm is automatically installed along with it.n


// if we give npm install directly it will throw error as "npm ERR! code E404 npm ERR! 404 Not Found - GET https://registry.npmjs.org/npm - Not found" because npm is not a package that can be installed via npm itself. we need package.json file to install packages using npm.// to create package.json file we can use command "npm init" or "npm init -y" to create package.json file with default values.// npm is a package manager for JavaScript programming language. it is used to install, share, and manage dependencies (packages) in our projects. it helps in managing the libraries and tools that our project depends on.
// npm ibstall chalk
// to install node modules globally we can 
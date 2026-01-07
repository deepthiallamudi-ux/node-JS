const os=require("os")
console.log(os.cpus());
console.log(os.freemem()/1024);
console.log(os.totalmem());
console.log(os.homedir());
console.log(os.hostname());



// Synchronous file read
const f=require("fs")
const data = f.readFileSync('./theory.js',{encoding:"utf-8"});
console.log(data);

f.writeFileSync('./newfile.txt',"hello world");
console.log("file created");    




Worker Threads

What are worker threads?
Why are worker threads needed?
Difference between thread pool and worker threads

  


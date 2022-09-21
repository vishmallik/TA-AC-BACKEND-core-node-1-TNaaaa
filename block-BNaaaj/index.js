console.log("Welcome to Nodejs");
//node index.js

const os = require("os");
const cpus = os.cpus().length;
const freeMem = os.freemem();
const uptime = os.uptime();
const version = os.version();

console.log(cpus, freeMem, uptime, version);

const { readFile, unlink } = require("fs");

const buff1 = Buffer.alloc(12);
const buff2 = Buffer.allocUnsafe(12);

buff1.write("Hello World!!!");
console.log(buff1.toString());

//blocking code
for (let i = 0; i < 9999; i++) {
  console.log(i);
}

//non blocking code
const promise = new Promise((res) => {
  setTimeout(() => res(1), 2000);
});
promise.then(console.log);

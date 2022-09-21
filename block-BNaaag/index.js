const fs = require("fs");

fs.readFile("./content.md", (error, content) => {
  console.log(content.toString());
  console.log(error);
});

//sync code
fs.readFileSync("./content.md", (err, content) => {
  console.log("sync", content.toString());
  console.log(err);
});

//async code
fs.readFile("./content.md", (error, content) => {
  console.log("async", content.toString());
  console.log(error);
});

let buff1 = Buffer.alloc(10);
console.log(buff1);

buff1.write("Welcome to Buffer");

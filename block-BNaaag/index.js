const fs = require("fs");

fs.readFile("./content.md", (error, content) => {
  console.log(content.toString());
  console.log(error);
});

//sync code
let result = fs.readFileSync("./content.md", "utf8");
console.log(result);
//async code
fs.readFile("./content.md", (error, content) => {
  console.log("async", content.toString());
  console.log(error);
});

let buff1 = Buffer.alloc(10);
buff1.write("Welcome to Buffer");
console.log(buff1);

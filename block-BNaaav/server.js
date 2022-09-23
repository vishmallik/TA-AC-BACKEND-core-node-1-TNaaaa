const http = require("http");
// const url = require("url");s
const fs = require("fs");

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.url === "/") {
    fs.createReadStream("./index.html").pipe(res);
  }
  if (req.url === "/about") {
    fs.createReadStream("./about.html").pipe(res);
  }
  if (req.url === "/blog") {
    fs.createReadStream("./blog.html").pipe(res);
  }
  if (req.url === "/cases") {
    fs.createReadStream("./cases.html").pipe(res);
  }
  if (req.url === "/contact") {
    fs.createReadStream("./contact.html").pipe(res);
  }
  if (req.url === "/services") {
    fs.createReadStream("./services.html").pipe(res);
  }
  if (req.url.split(".").pop() === "css") {
    res.setHeader("Content-Type", "text/css");
    // read css file and send it in response
    fs.readFile("." + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }
  if (
    req.url.split(".").pop() === "jpg" ||
    req.url.split(".").pop() === "png"
  ) {
    res.setHeader("Content-Type", "image/jpeg");
    // read css file and send it in response
    fs.readFile("." + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }
}
server.listen(5555, () => {
  console.log("Server listening on port 5555");
});

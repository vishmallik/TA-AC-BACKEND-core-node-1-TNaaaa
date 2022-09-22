const http = require("http");
const url = require("url");
const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  let parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;
  if (req.method === "GET" && pathname === "/") {
    res.setHeader("Content-Type", "text/plain");
    res.end("Welcome to homepage");
  } else if (req.method === "GET" && pathname === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h2>this is all about NodeJS</h2>");
  } else if (req.method === "POST" && pathname === "/about") {
    res.setHeader("Content-Type", "text/json");
    res.end("{message: this is a post request}");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
}
server.listen(5000, () => {
  console.log(`server listening on port 5000`);
});

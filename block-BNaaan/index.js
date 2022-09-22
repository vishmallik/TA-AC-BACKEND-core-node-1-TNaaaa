const http = require("http");

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.headers);
  console.log(req.method, req.url);
  res.end("Welcome");
}

server.listen(3000, () => {
  console.log(`server listening on port 3000`);
});

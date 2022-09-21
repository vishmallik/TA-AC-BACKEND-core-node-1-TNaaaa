const http = require("http");

const server = http.createServer(handleRequest);
server.listen(4000, () => {
  console.log(`server started listening on port 4000`);
});

function handleRequest(res, req) {
  req.end("Welcome to my first server");
}

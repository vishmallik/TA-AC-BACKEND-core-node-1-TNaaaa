// Q. Create a basic server using http's createServer
//   - listen for request on port 5000
//   - console request and response object
//   - do a request using browser on `localhost:5000`
//   - check out console for request and response object

const http = require("http");
const url = require("url");

const server1 = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req, res);
}
server1.listen(5000, () => {
  console.log("server listening on port 5000");
});

// Q. create a node server
//   - add listener on port 5100
//   - respond with 'My first server in NodeJS' using response object

const server2 = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.end("My first server in NodeJS");
}
server2.listen(5100, () => {
  console.log("server listening on port 5100");
});

// Q. write code to create a node server
//   - add listener on port 5555
//   - console request headers
//   - respond with content of user-agent from request headers.

const server3 = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.headers);
  console.log(req.headers["user-agent"]);
}
server3.listen(5555, () => {
  console.log("server listening on port 5555");
});

// Q. write code to create a node server
//   - add listener on port 5566
//   - console request url and request method
//   - return a text response with requested url and method

const server4 = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/plain");
  res.write(req.url);
  res.write(req.method);
  res.end();
}
server4.listen(5566, () => {
  console.log("server listening on port 5566");
});

// Q. write code to create a node server
//   - add listener on port 7000
//   - also add a callback function to listener with a console `server listening on port 7000`
//   - return entire request headers in response.

const server5 = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.write(JSON.stringify(req.headers));
  res.end();
}
server5.listen(7000, () => {
  console.log("server listening on port 7000");
});

// Q. create a server
//   - add a listener on port 3333
//   - set status code 202 in response using `res.statusCode`.

const server6 = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.statusCode = 202;
  res.end();
}
server6.listen(3333, () => {
  console.log("server listening on port 3333");
});

// Q. create a server
//   - add a listener on port 8000
//   - set appropriate header for html response using `res.setHeader`
//   - return an HTML response(`<h3>Welcome to altcampus</h3>`)

const server7 = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.end(`<h3>Welcome to altcampus</h3>`);
}
server7.listen(8000, () => {
  console.log("server listening on port 8000");
});

// Q. Repeat above question using `res.writeHead` to set status code and Content-Type at the same time.

const server8 = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.writeHead(202, { "Content-Type": "text/html" });
  res.end(`<h3>Welcome to altcampus</h3>`);
}
server8.listen(8001, () => {
  console.log("server listening on port 8001");
});

// Q. create a basic node server
//   - add a listener at port 8888
//   - add appropriate header for json response
//   - send json response({success: true, message: 'Welcome to Nodejs'})

const server9 = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ success: true, message: "Welcome to Nodejs" }));
}
server9.listen(8888, () => {
  console.log("server listening on port 8888");
});

// Q. create a server
//   - add listener on port 5050
//   - use postman to do a POST request on index route
//   - console to check request method
//   - send HTML response i.e. `<h2>posted for first time</h2>`

const server10 = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.method);
  if (req.method === "POST" && req.url === "/") {
    res.setHeader("Content-Type", "text,html");
    res.end("<h2>posted for first time</h2>");
  }
}
server10.listen(5050, () => {
  console.log("server listening on port 5050");
});

// Q. create a server and handle 2 different requests
//   - add a listener on port 2345
//   - handle GET request on '/' route where return your name in plain text in response
//   - handle GET request on '/about' route and return your name in h2 as HTML page.
//   - add a error handler at last to handle request made on other than above routes with a status code of 404.

const server11 = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === "GET" && req.url === "/") {
    res.setHeader("Content-Type", "text,plain");
    res.end("Visawjeet Mallik");
  } else if (req.method === "GET" && req.url === "/about") {
    res.setHeader("Content-Type", "text,html");
    res.end("<h2>Visawjeet Mallik</h2>");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found!");
  }
}
server11.listen(2345, () => {
  console.log("server listening on port 2345");
});

// Q. Handle 2 requests on same route with different method
//     1. GET on '/users' route where return a simple HTML form with name and email field
//     2. POST on '/users' route with a message 'Posted for the second time'.

const server12 = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === "GET" && req.url === "/") {
    res.setHeader("Content-Type", "text,plain");
    res.end("Visawjeet Mallik");
  } else if (req.method === "GET" && req.url === "/about") {
    res.setHeader("Content-Type", "text,html");
    res.end("<h2>Visawjeet Mallik</h2>");
  } else if (req.method === "GET" && req.url === "/users") {
    res.setHeader("Content-Type", "text,html");
    res.end(
      "<form><input type=text placeholder=name><input type=email placeholder=email></form>"
    );
  } else if (req.method === "POST" && req.url === "/users") {
    res.setHeader("Content-Type", "text,html");
    res.end("Posted for the second time");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found!");
  }
}
server12.listen(2346, () => {
  console.log("server listening on port 2346");
});

// Q. create a server and handle query params from the request on following url i.e. `/users?email=nodeserver@gmail.com` from browser

//   - parse the  request url using parse method from url module
//   - console pathname from parsed url in above step
//   - grab url using `req.url`
//   - differentiate between `req.url` and `parsedUrl.pathname`
//   - grab the email from query params
//   - return json response with email from query params

const server13 = http.createServer(handleRequest);

function handleRequest(req, res) {
  let parsedUrl = url.parse(req.url, true);
  let pathname = parsedUrl.pathname;
  console.log(pathname);
  let reqUrl = req.url;
  console.log(reqUrl, pathname);
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(parsedUrl.query));
}
server13.listen(9999, () => {
  console.log("server listening on port 9999");
});

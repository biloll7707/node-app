const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
    return
  }
  if (req.url === "/about") {
    res.end("Here is our about page");
    return
  }

  res.end(`
    <h1>oops</h1>
    <p>We could not find the page you are looking for</p>
    <a href="/">Back home</a>`);
});

server.listen(5000);
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
    return
  }
  if (req.url === "/about") {
    res.end("Here is our about page");
    return
  }

  res.end(`
    <h1>oops</h1>
    <p>We could not find the page you are looking for</p>
    <a href="/">Back home</a>`);
});

server.listen(5000);

/**
 * Exercise 3: Create an HTTP web server
 */

const http = require('http');
const fs = require('fs');

//create a server
let server = http.createServer(function (req, res) {
  if (req.url === '/') {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, 'utf8', function (err, content) {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    });
  } else if (req.url === '/index.js') {
    const filePath = path.join(__dirname, 'index.js');
    fs.readFile(filePath, 'utf8', function (err, content) {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.end(content);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('File not found');
  }
});

server.listen(3000); // The server starts to listen on port 3000

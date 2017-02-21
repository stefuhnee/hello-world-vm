'use strict';

const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write('Hello World!');
  response.end();
});

server.listen(80);

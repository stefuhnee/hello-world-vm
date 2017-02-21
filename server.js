var http = require('http');

var server = http.createServer(function(request, response) {
  response.write('Hello World!');
  response.end();
});

server.listen(80);
console.log('listening on port 80');

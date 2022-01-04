var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log(pathname);

    response.end();
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');
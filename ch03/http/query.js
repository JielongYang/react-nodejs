var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
    var parsedUrl = url.parse(request.url, true);

    var pathname = parsedUrl.pathname;
    var queries = parsedUrl.query;
    console.log(pathname);
    console.log(queries);

    response.end();
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');
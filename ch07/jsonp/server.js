var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
    var parsedUrl = url.parse(request.url, true);
    var queries = parsedUrl.query;
    var str = queries.callback + '(' + JSON.stringify({ 'hello': 'world' }) + ')';
    response.end(str);
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        'Access-Control-Allow-Headers': 'Content-Type'
    });
    response.end("success");
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');
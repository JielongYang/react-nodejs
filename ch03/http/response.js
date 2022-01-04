var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;

    if (pathname.includes('api1')) {
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });
        response.write('<!DOCTYPE html>' +
            '<html>' +
            '<head>' +
            '<meta charset="UTF-8">' +
            '<title>Test</title>' +
            '</head>' +
            '<body>' +
            'This is a testing page' +
            '</body>' +
            '</html>');
    } else if (pathname.includes('api2')) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ code: 0 }));
    }

    response.end();
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');
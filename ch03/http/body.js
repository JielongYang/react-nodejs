var http = require('http');

http.createServer(function (request, response) {
    var body = '';

    request.on('data', function (chunk) {
        body += chunk;
    });

    request.on('end', function () {
        if (request.headers['content-type'] == 'application/json') {
            console.log(body);
        }

        response.end();
    });
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');
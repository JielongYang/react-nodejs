var http = require('http');

var server = http.createServer(function (req, res) {
    var body = '';

    req.on('data', function (chunk) {
        body += chunk;
    });

    req.on('end', function () {
        if (req.headers['content-type'] == 'application/json') {
            var jsonObject = JSON.parse(body);
            res.end(JSON.stringify(jsonObject));
        } else {
            res.end('Not JSON');
        }
    });
});

server.listen(8080);
var http = require('http');
var sleep = require('sleep');

var server = http.createServer(function (req, res) {
    sleep.sleep(10);
    res.end('server sleep 10s');
});

server.listen(8080);
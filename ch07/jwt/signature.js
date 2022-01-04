var payload = new Buffer(JSON.stringify({
    "sub": "3252",
    "name": "Test",
    "iat": 1528516800,
    "exp": 1528603200
})).toString('base64');

var header = new Buffer(JSON.stringify({
    "typ": "JWT",
    "alg": "HS256"
})).toString('base64');

var algo = require('jwa')("HS256");
var secret = 'mystar';
var signature = algo.sign(header + '.' + payload, secret);
console.log(signature);

var jwt = header + '.' + payload + '.' + signature;
console.log(jwt);
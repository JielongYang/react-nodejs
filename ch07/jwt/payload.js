var content = {
    "sub": "3252",
    "name": "Test",
    "iat": 1528516800,
    "exp": 1528603200
};
var buffer = new Buffer(JSON.stringify(content));
var payload = buffer.toString('base64');
console.log(payload);
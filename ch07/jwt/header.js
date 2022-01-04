var content = {
    "typ": "JWT",
    "alg": "HS256"
};
var buffer = new Buffer(JSON.stringify(content));
var header = buffer.toString('base64');
console.log(header);
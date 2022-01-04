var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

fs.readFile('./test.txt', { 'encoding': 'utf8' })
    .then(function (data) {
        console.log('Data: ', data)
    })
    .catch(function (error) {
        console.log('Error: ', error);
    });

console.log('read async');
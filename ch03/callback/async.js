var fs = require('fs');

fs.readFile('./test.txt', { 'encoding': 'utf8' }, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log('read async');
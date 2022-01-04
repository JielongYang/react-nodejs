var fs = require('fs');

try {
    var data = fs.readFileSync('./test.txt', { 'encoding': 'utf8' });
    console.log(data);
} catch (err) {
    console.log(err.message);
}

console.log('read sync');
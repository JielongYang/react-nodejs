var fs = require('fs');

fs.readFile('test.txt', function () {
    setImmediate(function () {
        console.log('setImmediate');
    });

    setTimeout(function () {
        console.log('setTimeout')
    }, 0);
});

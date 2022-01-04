var fs = require('fs');

function getData(fileName, options) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, options, function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        });
    });
}

getData('./test.txt', { 'encoding': 'utf8' })
    .then(function (data) {
        console.log('Data: ', data)
    })
    .catch(function (error) {
        console.log('Error: ', error);
    });
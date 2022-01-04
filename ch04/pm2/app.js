var fs = require('fs');

function writeFile() {
    file = '/tmp/demo';
    date = new Date().toLocaleString();
    options = { 'flag': 'a' }

    console.log(date);
    fs.writeFile(file, date + "\n", options, function (err) {
        if (err) {
            throw err;
        }
    });
}

setInterval(writeFile, 5000);
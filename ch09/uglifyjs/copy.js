var fs = require('fs');

function main(argv) {
    fs.createReadStream(argv[0]).pipe(fs.createWriteStream(argv[1]));
}

var args = process.argv.slice(2);
if (!!args && args.length === 2) {
    main(args);
} else {
    console.log('args is invalid!');
}
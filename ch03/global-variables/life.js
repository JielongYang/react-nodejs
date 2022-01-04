process.on('exit', function (code) {
    setTimeout(function () {
        console.log('no execution');
    }, 0);

    console.log('exit code:', code);
});

console.log('process exit');
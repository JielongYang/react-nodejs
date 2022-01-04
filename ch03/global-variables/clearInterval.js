function printHello() {
    console.log("Hello, World!");
}

var t = setInterval(printHello, 2000);
clearInterval(t);
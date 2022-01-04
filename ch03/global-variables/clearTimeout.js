function printHello() {
    console.log("Hello, World!");
}

var t = setTimeout(printHello, 2000);
clearTimeout(t);
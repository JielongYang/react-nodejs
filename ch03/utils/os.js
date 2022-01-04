var os = require("os");

// 主机名
console.log('hostname : ' + os.hostname());

// CPU字节序
console.log('endianness : ' + os.endianness());

// 操作系统名
console.log('type : ' + os.type());

// 系统内存总量
console.log('total memory : ' + os.totalmem() / 1024 / 1024 + " MB");

// 系统空闲内存量
console.log('free memory : ' + os.freemem() / 1024 / 1024 + " MB");
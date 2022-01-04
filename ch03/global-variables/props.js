// 标准输出
process.stdout.write('Hello World!' + '\n');

// 参数数组
process.argv.forEach(function (value, index) {
    console.log(index + ': ' + value);
});

// Node绝对路径
console.log(process.execPath);

// Node版本
console.log(process.version);

// 运行Node程序的操作系统
console.log(process.platform);

// 环境变量PATH
console.log(process.env.PATH);
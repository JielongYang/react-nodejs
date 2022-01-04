var path = require('path');

var full_path = '/Applications/TotalFinder.app';

// 返回路径中代表文件夹的部分
console.log(path.dirname(full_path));

// 返回路径中的最后一部分
console.log(path.basename(full_path));

// 返回路径中文件的后缀名
console.log(path.extname(full_path));

// 平台特定的路径片段分隔符
console.log(path.sep);

// 平台特定的路径定界符
console.log(process.env.PATH.split(path.delimiter));

// 连接生成规范路径
console.log(path.join('/usr', 'local', 'bin'));

// 判断是否为绝对路径
console.log(path.isAbsolute(full_path));
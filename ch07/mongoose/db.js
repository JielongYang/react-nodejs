const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1/test_db?poolSize=5';
mongoose.createConnection(uri, {
    poolSize: 4
}).then(() => {
    console.log('数据库连接成功');
}).catch(err => {
    console.error('数据库连接失败：', err);
});
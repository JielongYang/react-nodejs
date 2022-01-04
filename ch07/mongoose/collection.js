const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1/test_db?poolSize=5';
const connection = mongoose.createConnection(uri);

const Website = connection.model('Website', {
    name: String,
    url: String,
    alexa: Number
});

const sites = [
    {
        name: '百度',
        url: 'https://baidu.com',
        alexa: 200
    },
    {
        name: '淘宝',
        url: 'https://taobao.com',
        alexa: 300
    },
]
sites.forEach(function (item) {
    new Website(item).save()
        .then((result) => {
            console.log('插入数据成功：', result.id);
        }).catch(err => {
            console.error('插入数据失败：', err);
        });
});

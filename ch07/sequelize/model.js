const Sequelize = require('sequelize');
const sequelize = new Sequelize('test_db', 'root', '123456', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
});

class Website extends Sequelize.Model { }
Website.init({
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    url: Sequelize.STRING,
    alexa: Sequelize.BIGINT
}, {
    sequelize,
    timestamps: false,
    tableName: 'websites'
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
    Website.create(item)
        .then((result) => {
            console.log('插入数据成功：', result.id);
        }).catch(err => {
            console.error('插入数据失败：', err);
        });
});

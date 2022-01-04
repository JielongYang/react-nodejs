const Sequelize = require('sequelize');

const db_name = 'test_db'
const username = 'root'
const password = '123456'

const sequelize = new Sequelize(db_name, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 5, // 连接池最大连接数
        min: 0, // 连接池最小连接数
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('数据库连接成功');
    })
    .catch(err => {
        console.error('数据库连接失败：', err);
    });
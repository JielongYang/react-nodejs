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

return sequelize.transaction((t) => {
    return Website.create({
        name: '腾讯',
        url: 'https://qq.com',
        alexa: 40
    }, { transaction: t }).then((site) => {
        return site.update({
            alexa: 400,
        }, { transaction: t });
    });
}).then((result) => {
    console.log('事务提交成功：', JSON.stringify(result));
}).catch(err => {
    console.error('事务操作失败：', err);
});

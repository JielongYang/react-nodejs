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

class AccessLog extends Sequelize.Model { }
AccessLog.init({
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    site_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
    },
    count: Sequelize.INTEGER,
    date: Sequelize.DATEONLY
}, {
    sequelize,
    timestamps: false,
    tableName: 'access_logs'
});

Website.hasMany(AccessLog, {
    foreignKey: 'site_id', sourceKey: 'id', as: 'accessLogs'
})

Website.findAll({
    where: {
        id: 1,
    },
    include: [{
        model: AccessLog,
        required: true, // INNER JOIN
        as: 'accessLogs',
    }]
}).then(result => {
    console.log('插入数据成功：', JSON.stringify(result));
}).catch(err => {
    console.error('插入数据失败：', err);
});

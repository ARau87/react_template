const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('usageDB', 'root', 'secret', {
    host: '172.19.0.2',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;
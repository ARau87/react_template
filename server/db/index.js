const {Sequelize} = require('sequelize');
const db = require('./connection');
const models = require('./models');

const init = () => {

    models.User.associate(models);
    models.UsageEntry.associate(models);
    models.EntryType.associate(models);

    models.EntryType.sync({alter: true});
    models.User.sync({alter: true});
    models.UsageEntry.sync({alter: true});

}

module.exports = {
    init
}
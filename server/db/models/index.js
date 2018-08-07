const {Sequelize} = require('sequelize');
const db = require('../connection');
const User = require('./user')(db, Sequelize);
const UsageEntry = require('./entry')(db, Sequelize);
const EntryType = require('./entry-type')(db, Sequelize);

module.exports = {

    User,
    UsageEntry,
    EntryType

}
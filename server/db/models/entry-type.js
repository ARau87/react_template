const UsageEntry = require('./entry');

module.exports = (db, DataTypes) => {

    const EntryType = db.define('entrytype', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        unit: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    
    });
    
    EntryType.associate = models => {
    };
    
    return EntryType;

}
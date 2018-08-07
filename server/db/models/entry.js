module.exports = (db, DataTypes) => {

    const UsageEntry = db.define('entry', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        value: {
            type: DataTypes.DECIMAL(20, 2),
            allowNull: false 
        },
        details: {
            type: DataTypes.STRING(512),
            allowNull: true
        },
        month: {
            type: DataTypes.INTEGER,
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

    UsageEntry.associate = (models) => {
        UsageEntry.belongsTo(models.User);
        UsageEntry.belongsTo(models.EntryType);
    };
    
    return UsageEntry;

}
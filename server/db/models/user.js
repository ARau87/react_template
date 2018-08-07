module.exports = (db, DataTypes) => {

    const User = db.define('user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        firstname: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
    
    });
    
    User.associate = models => {
        User.hasMany(models.UsageEntry)
    };
    
    return User;

}
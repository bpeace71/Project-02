module.exports = function(sequelize, DataTypes) {
 
    var User = sequelize.define('user', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
 
        firstname: {
            type: DataTypes.STRING,
            notEmpty: true
        },
 
        lastname: {
            type: DataTypes.STRING,
            notEmpty: true
        },
 
        username: {
            type: DataTypes.STRING,
            notEmpty: true
        },
 
        address1: {
            type: DataTypes.STRING,
        },
 
        address2: {
            type: DataTypes.STRING,
        },
 
        city: {
            type: DataTypes.STRING,
            notEmpty: true
        },
 
        state: {
            type: DataTypes.STRING,
            notEmpty: true
        },
 
        phone: {
            type: DataTypes.STRING,
        },
 
        gender: {
            type: DataTypes.STRING,
            notEmpty: true
        },
 
        height: {
            type: DataTypes.STRING,
            notEmpty: true
        },
 
        initialWeight: {
            type: DataTypes.STRING,
            notEmpty: true
        },
 
        bodyType: {
            type: DataTypes.STRING,
            notEmpty: true
        },

        about: {
            type: DataTypes.TEXT
        },
 
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
 
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
 
        last_login: {
            type: DataTypes.DATE
        },
 
        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
 
 
    });
 
    return User;
 
}
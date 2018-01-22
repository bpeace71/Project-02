module.exports = function(sequelize, Sequelize) {
 
    var User = sequelize.define('user', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        lastname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        username: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        address1: {
            type: Sequelize.STRING,
        },
 
        address2: {
            type: Sequelize.STRING,
        },
 
        city: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        state: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        phone: {
            type: Sequelize.STRING,
        },
 
        gender: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        height: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        initialWeight: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        bodyType: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        about: {
            type: Sequelize.TEXT
        },
 
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
 
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
 
        last_login: {
            type: Sequelize.DATE
        },
 
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
 
 
    });
 
    return User;
 
}
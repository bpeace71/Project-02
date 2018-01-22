module.exports = function(sequelize, DataTypes) {
 
    // var Routine = sequelize.define('routine', {
    // });


// Model for "Routines" model in the table routine.
var Routine = sequelize.define('Routine', {
   
   	routineID: {
            type: DataTypes.INTEGER,
            notEmpty: true
        },

    routinetext: {
            type: DataTypes.STRING,
            notEmpty: true
        },

	}, {
		timestamps: false
	});
	// {freezeTableName:true,});
    return Routine;
 
};

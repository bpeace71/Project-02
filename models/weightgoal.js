Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Goal Weight" model that matches up with DB
var goalweight = sequelize.define("goalweight", {
  goalweight: {
    type: Sequelize.INTEGER
  },
  intensity: {
    type: Sequelize.STRING
  },
   {
  timestamps: false
});

// Syncs with DB
goalweight.sync();

// Makes the Goal WeightModel available for other files (will also create a table)
module.exports = goalweight;

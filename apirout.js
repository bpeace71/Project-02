//*********************************************************************************

// Dependencies
// =============================================================
var goalweight = require("../models/goalweight.js");
var user = require("../models/user.js");
// Routes
// =============================================================
module.exports = function(app) {
  
 /// We need two models one for users one for the routines
  

  // User  goalweight input to query the database for a specific routine
 // based on the goalweight based on a weekly routine.
  
  app.get("/api/yourplan/:goalweight", function(req, res) {
    if (req.params.goalweight) {
      goalweight.findAll({
        where: {
          genre: req.params.goalweight
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

////// Displays the users weight chart for users table 

  app.get("/api/myweighttrack/:weightin", function(req, res) {
    if (req.params.weightin) {
      User.findAll({
        where: {
          weight: req.params.weights
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });


  

  // User is able to add current weight  
  app.post("/api/myweightrackeradd", function(req, res) {
    console.log("User Data:");
    console.log(req.body);
    User.create({
      Weight: req.body.weight,
    });
  });

  
};

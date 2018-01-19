var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "cosu",
 password: "csulli0892",
  database: "tortoise_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected!")
  //start();
});
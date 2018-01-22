var express = require('express')
var app = express()
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv').load()
var exphbs = require('express-handlebars')
var mysql = require("mysql");
var inquirer = require("inquirer");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "cosu",
//  password: "csulli0892",
//   database: "tortoise_DB"
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected!")
//   //start();
// });

//For BodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
 
 
// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
 
 
//For Handlebars
app.set('views', './views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
 
 
 
app.get('/', function(req, res) {
    res.send('Welcome to Passport with Sequelize.');
});
 
//Models
var models = require("./models");
 
//Routes
var authRoute = require('./routes/auth.js')(app, passport);
 
 
//load passport strategies
require('./config/passport/passport.js')(passport, models.user);
 
 
//Sync Database
models.sequelize.sync().then(function() {
    console.log("Database synced!")
 
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
		});


 
 
app.listen(5000, function(err) {
    if (!err)
        console.log("Connected! Site is live.");
    else console.log(err)
});
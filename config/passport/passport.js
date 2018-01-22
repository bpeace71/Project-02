var bCrypt = require('bcrypt-nodejs');
 
module.exports = function(passport, user) {


    var User = user;
    var LocalStrategy = require('passport-local').Strategy;

    //serialize
	passport.serializeUser(function(user, done) {
    done(null, user.id);
	});

	// deserialize user 
	passport.deserializeUser(function(id, done) {
    User.findById(id).then(function(user) {
        if (user) {
            done(null, user.get());
        } else {
            done(user.errors, null);
        }
    	});
	});

    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {
            var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };
            User.findOne({
                where: {
                    email: email
                }
            }).then(function(user) {
 
                if (user)
                {
                    return done(null, false, {
                        message: 'That email is in use.'
                    });
                } else
                {
                    var userPassword = generateHash(password);
                    var data =
                        {

                            firstname: req.body.firstname,
                            lastname: req.body.lastname,
                            username: req.body.username,
                            password: userPassword,
                            email: email,
                            address1: req.body.address1,
                            address2: req.body.address2,
                            city: req.body.city,
                            state: req.body.state,
                            phone: req.body.phone,
                            gender: req.body.gender,
                            height: req.body.height,
                            initialWeight: req.body.initialWeight,
                            bodyType: req.body.bodyType,
                        };
                    User.create(data).then(function(newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        } else {
                            routines.findAll({
                                where: {
                                id: req.body.initialWeight
                                    }
                                }).then(function(results) {
                                    res.json(results);
                                    console.log(results);
                                });
                            // return done(null, newUser);
                        }
                    });
                }
            });
        }
    ));

    //serialize
	passport.serializeUser(function(user, done) {
 
    done(null, user.id);
 
	});
		// deserialize user 
	passport.deserializeUser(function(id, done) {
 	   User.findById(id).then(function(user) {
  	      if (user) {
    	        done(null, user.get());
    	    } else {
     	       done(user.errors, null);
    	    }
   	 });
	});

	//LOCAL SIGNIN
passport.use('local-signin', new LocalStrategy(
 
    {
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email', 
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
 
 
    function(req, email, password, done) {
        var User = user;
        var isValidPassword = function(userpass, password) {
            return bCrypt.compareSync(password, userpass);
        }
 
        User.findOne({
            where: {
                email: email
            }

        }).then(function(user) {

            if (!user) {
                return done(null, false, {
                    message: 'Email does not exist'
                });
                console.log("email don't exist, yo.")
            }

            if (!isValidPassword(user.password, password)) {
                return done(null, false, {
                    message: 'Incorrect password.'
                });
                console.log("wrong password, yo.")
            }
            var userinfo = user.get();
            return done(null, userinfo);
            
        }).catch(function(err) {
            console.log("Error:", err);
            return done(null, false, {
                message: 'Something went wrong with your Signin'
            });
                console.log("what are you doing.")            
        });
    }
));
}


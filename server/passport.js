// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;

// load up the user model
var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
var connection = require('../db/sportivDB.js');

module.exports = function(passport) {

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.user_id);
    });

    passport.deserializeUser(function(id, done) {
        connection.query("SELECT * FROM Users WHERE user_id = ? ",[id], function(err, rows){
            done(err, rows[0]);
        });
    });
    passport.use(
        'local-login',
        new LocalStrategy({
                // by default, local strategy uses username and password, we will override with email
                usernameField : 'username',
                passwordField : 'password',
                passReqToCallback : true // allows us to pass back the entire request to the callback
            },
            function(req, email, password, done) { // callback with email and password from our form
                console.log("user inserted email: ", email);
                console.log("user inserted password: ", password);
                connection.query("SELECT * FROM Users WHERE email = ?",[email], function(err, rows){
                    if (err)
                        return done(err);
                    console.log(rows);
                    if (!rows.length) {
                        return done(null, false);
                    }
                    if (password.localeCompare(rows[0].password)){
                        console.log("wrong login");
                        return done(null, false);

                    }
                    // all is well, return successful user
                    console.log("Good login");
                    return done(null, rows[0]);
                });
            })
    );
};
    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    // passport.use(
    //     'local-signup',
    //     new LocalStrategy({
    //             // by default, local strategy uses username and password, we will override with email
    //             usernameField : 'username',
    //             passwordField : 'password',
    //             passReqToCallback : true // allows us to pass back the entire request to the callback
    //         },
    //         function(req, username, password, done) {
    //             // find a user whose email is the same as the forms email
    //             // we are checking to see if the user trying to login already exists
    //             connection.query("SELECT * FROM users WHERE user_name = ?",[username], function(err, rows) {
    //                 if (err)
    //                     return done(err);
    //                 if (rows.length) {
    //                     return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
    //                 } else {
    //                     // if there is no user with that username
    //                     // create the user
    //                     var newUserMysql = {
    //                         username: username,
    //                         password: bcrypt.hashSync(password, null, null)  // use the generateHash function in our user model
    //                     };
    //
    //                     var insertQuery = "INSERT INTO users ( username, password ) values (?,?)";
    //
    //                     connection.query(insertQuery,[newUserMysql.username, newUserMysql.password],function(err, rows) {
    //                         newUserMysql.id = rows.insertId;
    //
    //                         return done(null, newUserMysql);
    //                     });
    //                 }
    //             });
    //         })
    // );

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'


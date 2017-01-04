#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var path = require('path');
var session  = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var passport = require('passport');
var flash    = require('connect-flash');

// var db = require('./db/sportivDB.js');
var app = express();
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080
    , ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";

//require('./server/passport.js')(passport);


app.use('/static', express.static('public'));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/login.html'));
});

app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/',
        failureRedirect : '/login',
        failureFlash : true
    }),
    function(req, res) {
        if (req.body.remember) {
            req.session.cookie.maxAge = 1000 * 60 * 3;
        } else {
            req.session.cookie.expires = false;
        }
        res.redirect('/');
    });

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}


app.listen(port, ip);


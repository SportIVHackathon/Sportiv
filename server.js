#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var path = require('path');
var session  = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var passport = require('passport');
var flash    = require('connect-flash');

var db = require('./db/sportivDB.js');
var app = express();
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080
    , ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";

require('./server/passport.js')(passport);

app.use(flash());
app.use(bodyParser.json());
app.use(session({
    secret: 'vidyapathaisalwaysrunning',
    resave: true,
    saveUninitialized: true
} )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/login');
}

app.use('/static', express.static('public'));
app.get('/', isLoggedIn,  function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/login.html'));
});

app.post('/login', passport.authenticate('local-login', {
        failureRedirect : '/login',
        failureFlash : true
    }),
    function(req, res) {
        if (req.body.remember) {
            req.session.cookie.maxAge = 1000 * 60 * 3;
        } else {
            req.session.cookie.expires = false;
        }
        res.send({success:true});
    });

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

app.get("/getUserDetails", isLoggedIn ,  function (req, res){
    res.send(req.user);
});

app.get("/getEvents",  function (req, res){

    db.query('SELECT * from Events', function(err, rows) {
        if (err) res.send(err);
        res.send(rows);
    });
});


app.post("/newEvent",isLoggedIn,  function(req,res){
    var event_creator = req.user;
    var event_kind = req.body.event_kind;
    console.log("event_creator: ", event_creator );
    console.log("event_kind: ", event_kind );

});



app.listen(port, ip);


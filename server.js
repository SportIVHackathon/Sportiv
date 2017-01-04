#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var path = require('path');
var db = require('./db/sportivDB.js');

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080
    , ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";


var app = express();

app.use('/static', express.static('public'));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/login.html'));
});


app.listen(port, ip);
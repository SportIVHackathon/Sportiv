#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var db = require('./db/sportivDB.js');
db.connect();



var port = process.env.OPENSHIFT_NODEJS_PORT || 8080
    , ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";



var app = express();

app.get('/', function (req, res) {
    
});

app.listen(port, ip);
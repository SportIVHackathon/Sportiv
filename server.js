#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var db = require('./db/sportivDB.js');




var port = process.env.OPENSHIFT_NODEJS_PORT || 8080
    , ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";

var app = express();

app.get('/', function (req, res) {
    db.connect( function(err){
        if (err){
            res.send(err)
        }
        else {
            db.query('SELECT * from test', function(err, rows, fields) {
                if (err) res.send(error);
                console.log('The solution is: ', rows);
            });
            db.end();
        }
    });
});

app.listen(port, ip);
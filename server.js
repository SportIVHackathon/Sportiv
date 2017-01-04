#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var fs      = require('fs');


var port = process.env.OPENSHIFT_NODEJS_PORT || 8080
    , ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(port, ip);
#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var fs      = require('fs');
const port =  process.env.OPENSHIFT_NODEJS_PORT;

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(port, function () {
    console.log('Example app listening on port 3000!')
});
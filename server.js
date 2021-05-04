"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var app = express();
var Scripts_1 = require("./routes/Scripts");
var Melody_1 = require("./routes/Melody");
try {
    app.use(express.urlencoded({ extended: true }));
    // app.use(bodyParser.urlencoded({ extended: false }))
    // app.use(bodyParser.json())
    app.use('/scripts', Scripts_1["default"]);
    app.use('/melody', Melody_1["default"]);
    app.use('/client', express.static(__dirname + '/client'));
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '/client/index.html'));
    });
    app.get('/create', function (req, res) {
        res.sendFile(path.join(__dirname, '/client/pages/create/index.html'));
    });
    app.get('/result', function (req, res) {
        res.sendFile(path.join(__dirname, '/client/pages/result/index.html'));
    });
    app.listen(3000, function () {
        console.log("server started on: http://127.0.0.1:3000");
    });
    process.on('exit', function () {
        process.exit();
    });
}
catch (err) {
    console.log(err);
}

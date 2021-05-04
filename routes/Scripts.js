"use strict";
exports.__esModule = true;
var express = require("express");
var python_shell_1 = require("python-shell");
var Router = express.Router();
Router.get('/test', function (req, res) {
    var _a;
    if (!req.query.some_value) {
        req.query.some_value = '';
    }
    var options = {
        args: [
            (_a = req.query.some_value) === null || _a === void 0 ? void 0 : _a.toString(),
        ]
    };
    python_shell_1.PythonShell.run('./python/test.py', options, function (err, data) {
        if (err)
            throw err;
        if (data) {
            console.log(data);
            res.send(data);
        }
    });
});
exports["default"] = Router;

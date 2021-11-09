"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
//const port = process.env.PORT || 8080;
var port = process.env.npm_package_config_port || 8080; // using package.json config
var runningMessage = "server is running on port " + port + " watch on";
app.get('/', function (req, res) {
    console.log('API was successfully requested');
    res.send(runningMessage);
});
var server = app.listen(port, function () {
    console.log(runningMessage);
});
module.exports = server;

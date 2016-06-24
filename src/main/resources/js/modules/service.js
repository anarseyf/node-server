var app = require("angular").module("App");

var service = function ($http) {
    this.getTestValue = function () {
        return 42;
    };
    return this;
};

app.factory("TestService", service);
module.exports = service;
var angular = require("angular");
var app = angular.module("App");

var controller = function ($scope) {
    $scope.test = function () {
        return "TEST OK";  
    };
};

app.controller("TestController", controller);
module.exports = controller;
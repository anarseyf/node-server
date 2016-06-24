var app = require("angular").module("App");

var controller = function ($scope, TestService) {
    $scope.model = {
        moduleName: "Module 1",
        serviceTestValue: TestService.getTestValue()
    };

    console.log("TestController loaded");
    TestService.serverApi.json().then(function (response) {
        $scope.model.serviceTestValue = response.data;
    });
};

app.controller("TestController", controller);
module.exports = controller;
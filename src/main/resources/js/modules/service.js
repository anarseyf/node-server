var app = require("angular").module("App");

var service = function ($q, $http) {
    this.getTestValue = function () {
        return 42;
    };
    this.serverApi = {
        json: function () {
            var deferred = $q.defer();
            $http.get("/api/json").then(function (data) {
                deferred.resolve(data); 
            });
            return deferred.promise;
        }
    };
    return this;
};

app.factory("TestService", service);
module.exports = service;
var http = require("http");
// var path = require("path");
// var fs = require("fs");
// var url = require("url");
var serveStatic = require('serve-static');
var finalhandler = require('finalhandler');
var serve = serveStatic('./src/main/resources', {'index': ['index.html', 'index.htm']});

var server = http.createServer(function (request, response) {

    serve(request, response, finalhandler(request, response));
});
server.listen(8000);
console.log("Server running at http://127.0.0.1:8000/");
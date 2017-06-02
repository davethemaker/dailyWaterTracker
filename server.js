var http = require('http');
var fs   = require('fs');
var url  = require('url');

function start() {
    function onRequest(request,response) {
        var pathname = url.parse(request.url).pathname;
        console.log("rec'd: " + pathname);
        response.writeHead(200,{'Content-Type':'text/plain'});
        response.write("hello world");
        response.end();
    }

    http.createServer(onRequest).listen(8080);
    console.log("server up at 8080");
}

exports.start = start;
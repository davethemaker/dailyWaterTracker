var http = require('http');
var fs   = require('fs');

function start() {
    function requesListener(request,response) {
        response.writeHead(200,{'Content-Type':'text/plain'});
        response.write("hello world");
        response.end();
    }

    http.createServer(requesListener).listen(8080);
    console.log("server up at 8080");
}

exports.start = start;
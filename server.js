const http = require('http');
const fs   = require('fs');
const url  = require('url');

function start(route, handle) {
    function onRequest(request,response) {

        // const postData = "";
        const pathname = url.parse(request.url).pathname;
        console.log("rec'd: " + pathname);

        // request.setEncoding('utf8');
        // request.addListener("data", function(postDataChunk){
        //    postData += postDataChunk;
           // console.log("rec'd POSTed data chunk " + postDataChunk + ".");
        // });

        // request.addListener("end",function () {
            route(handle,pathname,response,request);
        // });

        // route(handle,pathname,response); // invoke passed-in route method

        // response.writeHead(200,{'Content-Type':'text/plain'});
        // response.write("hello world");
        // response.end();
    }

    http.createServer(onRequest).listen(8080);
    console.log("server up at 8080");
}

exports.start = start;
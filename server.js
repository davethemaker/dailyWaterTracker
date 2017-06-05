const http = require('http');
const fs   = require('fs');
const url  = require('url');
const MongoClient = require("mongodb").MongoClient;

require('dotenv').config()


function start(route, handle) {
   MongoClient.connect(process.env.PROD_MONGODB, (err,database) => {
     if(err) return console.log(err)
     console.log("db connected");
     db = database;
     
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
            route(handle,pathname,response,request,database);
        // });

        // route(handle,pathname,response); // invoke passed-in route method

        // response.writeHead(200,{'Content-Type':'text/plain'});
        // response.write("hello world");
        // response.end();
    }

    http.createServer(onRequest).listen(process.env.PORT || 8080);
    console.log("server up at 8080");
  });  
}

exports.start = start;
var fs = require('fs');
var querystring = require('querystring');

function start(response,postData) {
    console.log("request handler for 'start' has been called");
    fs.readFile('./uploadForm.html',function(err,data){
       response.write(data);
       response.end();
    });
}

function upload(response,postData){
    console.log("request handler for 'upload' has been called");
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write("you sent: " + querystring.parse(postData).text);
    response.end();
}

function show(response){
    response.writeHead(200,{'Content-Type':"image/png"});
    fs.createReadStream("/tmp/water.png").pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;
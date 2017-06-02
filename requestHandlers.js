var fs = require('fs');
var querystring = require('querystring');

function start(response) {
    console.log("request handler for 'start' has been called");
    fs.readFile('./uploadForm.html',function(err,data){
       response.write(data);
       response.end();
    });
}

function upload(response,request){
    console.log("request handler for 'upload' has been called");

    // var form = new formidable.IncomingForm();
    console.log("about to parse");
    // form.parse(request, function(err,fields,files){
    //     console.log("parsing done");
    // });
    response.writeHead(200,{'Content-Type':'text/html'});
    // response.write("you sent: " + querystring.parse(postData).text);
    // response.write("<img src='/show' />");
    response.write("<h3>show image here</h3>")
    response.end();
}

function show(response){
    console.log("reuest handler show was called");
    response.writeHead(200,{'Content-Type':"image/png"});
    fs.createReadStream("/tmp/water.png").pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;
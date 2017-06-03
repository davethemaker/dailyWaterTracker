var fs = require('fs');
var querystring = require('querystring');
var formidable = require('formidable');
var util = require('util');

function start(response) {
    console.log("request handler for 'start' has been called");
    fs.readFile('./uploadForm.html',function(err,data){
       response.write(data);
       response.end();
    });
}

function upload(response,request){
    console.log("request handler for 'upload' has been called");

    var form = new formidable.IncomingForm(); // from documentation

    form.uploadDir = "./savedImages";
    fs.rename('./savedImages/upload_069b2c3e3aa1c29a4f6309f53d85348a','./savedImages/me.jpg',function(err){
        if(err) console.log("error!");
    });

    console.log("about to parse");

    form.parse(request, function(err,fields,files){ // from documentation
        console.log("parsing done");
        response.writeHead(200,{'Content-Type':'text/plain'});
        // response.write("you sent: " + querystring.parse(postData).text);
        response.write("uploaad received");
        // response.write("<h3>show image here</h3>")
        response.end(util.inspect({fields:fields, files:files}));
        response.end();
    });
   return;
}

function show(response){
    console.log("reuest handler show was called");
    response.writeHead(200,{'Content-Type':"image/png"});
    fs.createReadStream("./savedImages/me.jpg").pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;
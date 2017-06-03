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

    console.log("about to parse");

    form.parse(request, function(err,fields,files){ // from documentation
        console.log("parsing done");


        fs.readdir('./savedImages',(err,imageFiles) => {

            fs.rename(files.upload.path,"savedImages/photo" + imageFiles.length + ".png", function(error){
                if(error) console.log("error with renaming");
                console.log("logged out number");
            });
        });




        response.writeHead(200,{'Content-Type':'text/plain'});
        // response.write("you sent: " + querystring.parse(postData).text);
        response.write("upload received");
        response.write("upload path" + files.upload.path);
        // response.write("<h3>show image here</h3>")
        response.end(util.inspect({fields:fields, files:files}));
        response.end();
    });
   return;
}

function show(response){
    console.log("request handler show was called");
    response.writeHead(200,{'Content-Type':"image/png"});
    // fs.createReadStream("./savedImages/").pipe(response);

    fs.readdir('./savedImages',(err,imageFiles) => {
        fs.createReadStream("./savedImages/photo"+imageFiles.length + ".png").pipe(response);
    });
};



exports.start = start;
exports.upload = upload;
exports.show = show;
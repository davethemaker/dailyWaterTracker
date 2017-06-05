var fs = require('fs');
var querystring = require('querystring');
var formidable = require('formidable');
var util = require('util');

function start(response) {
    console.log("request handler for 'start' has been called");
    fs.readFile('./uploadForm.html',function(err,data){
       response.writeHead(200,{'Content-Type':'text/html'});
       response.write(data);
       response.end();
    });
}

function upload(response,request,database){
    console.log("request handler for 'upload' has been called");

    var form = new formidable.IncomingForm(); // from documentation

    form.uploadDir = "./savedImages";

    console.log("about to parse");

    form.parse(request, function(err,fields,files){ // from documentation
        console.log("parsing done");
        console.log(util.inspect({fields,fields, files:files}));
        // console.log("files" + files);

        // database.collection('dailywatertracker').save(files.upload.path, (err,result) => {
        //             if(err) return console.log(err)
        //             console.log(result + " saved to db successfully");
        //             res.redirect('/');
        // });
        

        fs.readdir('./savedImages',(err,imageFiles) => {

            fs.rename(files.upload.path,"savedImages/" + imageFiles.length +".png", function(err){
                if(err) console.log("error with renaming");
                console.log("uploaded file name was renamed");
            });
        });




        response.writeHead(200,{'Content-Type':'text/html'});
        // // response.write("you sent: " + querystring.parse(postData).text);
        response.write("<p>upload received</p></p>");
        // // response.write("upload path" + files.upload.path);
        // // response.write("<h3>show image here</h3>")
        // // response.end(util.inspect({fields:fields, files:files}));
        response.end('<h3><a href="/">back</a><h3>');
        });
    return;
}

function show(response) {
    console.log("request handler show was called");
    response.writeHead(200, {'Content-Type': "image/png"});

    // fs.createReadStream("./savedImages/").pipe(response);

    fs.readdir('./savedImages', (err, imageFiles) => {
        fs.createReadStream("./savedImages/" + imageFiles.length + ".png").pipe(response);
})
    ;
}






exports.start = start;
exports.upload = upload;
exports.show = show;
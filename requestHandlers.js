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

    form.parse(request, function(err,fields){ // from documentation
        console.log("parsing done");
        console.log(util.inspect({fields,fields}));
        // console.log("files" + files);

        database.collection('dailywatertracker').save({description: fields.description}, (err,result) => {
                    if(err) return console.log(err)
                    console.log(" form fields saved to db successfully");
                    // request.get('/');  // redirect non-funcitonal
        });
        

        // fs.readdir('./savedImages',(err,imageFiles) => {

        //     fs.rename(files.upload.path,"savedImages/" + imageFiles.length +".png", function(err){
        //         if(err) console.log("error with renaming");
        //         console.log("uploaded file name was renamed");
        //     });
        // });




        response.writeHead(200,{'Content-Type':'text/html'});
        // // response.write("you sent: " + querystring.parse(postData).text);
        response.write("<p>upload received</p></p>");
        // // response.write("upload path" + files.upload.path);
        // // response.write("<h3>show image here</h3>")
        // // response.end(util.inspect({fields:fields, files:files}));
        response.end('<ul><li><a href="/">add another?</a></li><li><a href="/showDescriptions">see descriptions</a></li></ul>');
        });
    return;
}

function showDescriptions(response,request,database) {
    console.log("showDescriptions request handler has been called");

    database.collection('dailywatertracker').find().toArray(function(err,descriptions){
        if(err) return console.log(err)
        
        console.log("descriptions from db:" + descriptions);
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write('<h3>Water descriptions:</h3>');
        for(var i = 0; i < descriptions.length; i++){

           response.write('<ul><li>'+ descriptions[i].description +'</li></ul>');
            // console.log(descriptions[i].description);
        }
        response.end('<h5><a href="/">Add something more?</a></h5>');
    });
  return;
}

function showImage(response) {
    console.log("request handler show was called");
    response.writeHead(200, {'Content-Type': "image/png"});

    // fs.createReadStream("./savedImages/").pipe(response);

    fs.readdir('./savedImages', (err, imageFiles) => {
        fs.createReadStream("./savedImages/" + imageFiles.length + ".png").pipe(response);
    });
}






exports.start = start;
exports.upload = upload;
exports.showDescriptions = showDescriptions;
exports.showImage = showImage;
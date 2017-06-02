function start(response) {
    console.log("request handler for 'start' has been called");
}

function upload(response){
    console.log("request handler for 'upload' has been called");
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write("here comes the upload!");
    response.end();
}

exports.start = start;
exports.upload = upload;
function start() {
    console.log("request handler for 'start' has been called");
}

function upload(){
    console.log("request handler for 'upload' has been called");
}

exports.start = start;
exports.upload = upload;
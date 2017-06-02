
function route(handle, pathname,response,request){
    console.log("here is the pathname, going to route to it: " + pathname);
    if(typeof handle[pathname] === 'function'){
        handle[pathname](response,request); // invoke the function
    }
    else{
        console.log("no request handler found for " + pathname);
        response.writeHead(404,{'Content-Type':'text/plain'});
        response.write("404 not found");
        response.end();
    }
}

exports.route = route;
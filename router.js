
function route(handle, pathname){
    console.log("here is the pathname, going to route to it: " + pathname);
    if(typeof handle[pathname] === 'function'){
        handle[pathname](); // invoke the function
    }
    else{
        console.log("no request handler found for " + pathname);
    }
}

exports.route = route;
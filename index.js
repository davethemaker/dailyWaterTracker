var server = require('./server.js').start; // function in exported module
var router = require('./router.js'); // pass this to start function
var requestHandlers = require('./requestHandlers.js');

var handle = {}; // key:value pairs to handle routing
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server(router.route, handle); // instantiate server, pass handle to where server machinery will be addressed
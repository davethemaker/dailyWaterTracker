const server = require('./server.js').start; // function in exported module
const router = require('./router.js'); // pass this to start function
const requestHandlers = require('./requestHandlers.js');

const handle = {}; // key:value pairs to handle routing
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/showImage"] = requestHandlers.showImage;

server(router.route, handle); // instantiate server, pass handle to where server machinery will be addressed
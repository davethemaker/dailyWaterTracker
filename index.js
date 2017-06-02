var server = require('./server.js').start; // function in exported module
var router = require('./router.js'); // pass this to start function

server(router.route); // instantiate server
var liveServer = require("live-server");

var params = {
	port: 3500,
	host: "0.0.0.0",
	root: __dirname + "/../public",
	open: false,
	ignore: 'node-modules,src',
	file: "index.html",
	logLevel: 2,
	middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};
liveServer.start(params);
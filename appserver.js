//Load and Cache the koa module
//Used to create http-server for http request processing
var koa = require("koa");
//Load and cache the koa-statci module
//Used to perform I/O operation
//Read all Static files e.f. html/js/css
//and sned to client
var serve = require("koa-static");
//Auto-refresh TS to JS compilation on http-server
var livereload = require("livereload");
//Get the instance
var app = koa();
//Create a live server
var server = livereload.createServer();
//configure the app folder and all its .js files for the application
//to watch for changes
server.watch(__dirname + "/app/*.js");
//configure the coa server 
app.use(serve("."));
//Start listening on port 9090
app.listen(9090);

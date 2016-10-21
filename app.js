//Dependencies
var express = require('express');
var http = require('http');
//Endpoint dependencies


var app = express();


var server = http.createServer(app);
app.use(express.static('client'))



server.listen(3000, function() {
	console.log("server is good!, http://localhost:3000");
})


app.use(function(req, res, next) {
	console.log('after bodyParser', req.body); 
	next();
})



//Default router
app.use('/', function(req, res, next) {
	//req is the request object
	//res is the response object
	res.sendFile(__dirname+'/client/index.html')
})

//Error Handler
app.use(function(err, req, res, next) {
	res.status(err.status).send(err.message)
})

//Create Server

//app.listen(3000, function() {
//	console.log("server is good!, http://localhost:3000");
//})
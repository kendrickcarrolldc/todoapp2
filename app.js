//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var http = require('http');
//var notes = require('./api/notes');
//Endpoint dependencies

//START BY UNDOING THIS AND GETTING THIS SERVER RUNNING!!!!!!!
var app = express();

//Connect to MongoDBS
mongoose.connect("localhost", "SportsStore")
var db = mongoose.connection;
db.on("error", function(e){
    console.log(e);
});
db.once("open", function(){
    console.log("Database connected.")
});
// middleware

app.use(express.static('client'))
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());

var server = http.createServer(app);
server.listen(3000, function() {
	console.log("server is good!, http://localhost:3000");
})


app.use(function(req, res, next) {
	console.log('after bodyParser', req.body); 
	next();
})

//app.use("/notes", notes);

//Default router
app.use('/', function(req, res, next) {

	res.sendFile(__dirname+'/client/index.html')
})

//Error Handler
app.use(function(err, req, res, next) {
	res.status(err.status).send(err.message)
})




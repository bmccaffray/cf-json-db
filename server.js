'use strict';

var express = require('express');
var http = require('http');
var fs = require('fs');

var app = express();

app.get('/', function(req, res){
	res.send('append text to the url - ex. /test');
});

app.post('/:jsonInput', function(req, res){
	var jsonStr = JSON.stringify("{'jsonInput': " + req.params.jsonInput + "}");
	fs.writeFileSync('./output/jsonInput.json', jsonStr);
});

app.get('/:jsonInput', function(req, res){
	fs.readFile('./output/jsonInput.json', function(err, data){
		res.send(JSON.parse(data));
	});
});

var server = http.createServer(app);

app.set('port', process.env.PORT || 3000);

server.listen(app.get('port'), function() {
  console.log('server running on port ' + app.get('port'));
});
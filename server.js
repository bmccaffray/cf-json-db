'use strict';

var express = require('express');
var http = require('http');
var fs = require('fs');

var app = express();

app.use('/', function(req, res){
	res.send('append text to the url - ex. /test');
});

app.use('/:jsonInput', function(req, res){
	fs.writeFileSync('./output/jsonInput.json', '{ "jsonInput" : "' + req.params.jsonInput + '" }', 'utf8');
	res.send(fs.readFileSync('./output/jsonInput.json', 'utf8'));
});

var server = http.createServer(app);

app.set('port', process.env.PORT || 3000);

server.listen(app.get('port'), function() {
  console.log('server running on port ' + app.get('port'));
});
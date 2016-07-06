var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('client'));

app.get('/', function (req, res) {
	console.log(__dirname);
	res.sendFile(__dirname + '/client/index.html');
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});


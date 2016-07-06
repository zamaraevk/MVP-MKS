var express = require('express');
var path = require('path');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(express.static('client'));

app.get('/', function (req, res) {
	console.log(__dirname);
	res.sendFile(__dirname + '/client/index.html');
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});


var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 8000;

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



app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});


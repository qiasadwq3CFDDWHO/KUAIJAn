var express = require('express');
var app = express();
app.get('*', function(req, res) {
	res.sendFile(__dirname + req.path);
});
app.listen(1111, function() {
	console.log('start successed');
});
var express = require('express');
var fs	= require('fs');
var INPUT = "index.html";
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fs.readFileSync(INPUT).toString());

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});

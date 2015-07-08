/*global process*/
var http = require('http');
var fs = require('fs');
var bl = require('bl');

var filepath = process.argv[3];
var port = process.argv[2];

var server = http.createServer(function (request, response){
  var data = fs.createReadStream(filepath);
  data.pipe(response);
});
server.listen(port);
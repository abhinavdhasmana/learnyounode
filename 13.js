/*global process */
var http = require("http");
var url = require("url");
var map = require("through2-map");


var portNumber = process.argv[2];

function parsetime(query){
  // var date = new Date(Date.parse("2013-08-10T12:10:15.474Z"))
  var date = new Date(Date.parse(query["iso"]));
  return JSON.stringify({
    "hour": date.getHours(),
    "minute": date.getMinutes(),
    "second": date.getSeconds()
  });
}

function unixtime(query){
  return JSON.stringify({
    "unixtime": Date.parse(query["iso"])
    });
}

var server = http.createServer(function(request, response){
  response.writeHead(200, { 'Content-Type': 'application/json' });
  var searchParams = url.parse(request.url, true);
  if (searchParams["pathname"] === "/api/parsetime")
  {
    response.write(parsetime(searchParams["query"]));
  }
  else if (searchParams["pathname"] === "/api/unixtime") {
    response.write(unixtime(searchParams["query"]));
   }
   response.end();
});
server.listen(portNumber);
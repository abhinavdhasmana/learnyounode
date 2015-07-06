/* global process*/
var net = require('net');
var strftime = require('strftime')
var port = process.argv[2];

var server = net.createServer(function(socket){
  var d = new Date();
  var data = strftime('%F %R', d);
  socket.write(data);
  socket.end();
  
});
server.listen(port);


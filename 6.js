/* global process */
var myModule = require('./myModule');
var dirPath = process.argv[2];
var extension = process.argv[3];

function myCallback(err, data) {
  if (err) {
    console.log(err);
  }
  else {
    for (var index = 0; index < data.length; index++) {
      console.log(data[index]);
    }
  }
}

myModule(dirPath, extension, myCallback);


var fs = require('fs');
var path = require('path');

module.exports = function (dirPath, extension, myCallback) {
  fs.readdir(dirPath, function completedDirRead(error, filesArray) {
    if (error)
      return myCallback(error);
    var selectedArray = [];
    for (var i = 0; i < filesArray.length; i++) {
      var file = filesArray[i];
      if (path.extname(file) === "." + extension) {
        selectedArray.push(file);
      }
    }
    myCallback(null, selectedArray);
  });
}; 
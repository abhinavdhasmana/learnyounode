var fs = require('fs');

var filePath = process.argv[2];
var fileContent = fs.readFileSync(filePath).toString();
var elementsInArray = fileContent.split("\n");
console.log(elementsInArray.length - 1);
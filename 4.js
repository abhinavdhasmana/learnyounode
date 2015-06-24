var fs = require('fs');

var filePath = process.argv[2];
fs.readFile(filePath, function readFileCompleted(error, data){
	if (error) console.error(error);
	var elementsInArray = data.toString().split("\n");
	console.log(elementsInArray.length - 1);
});



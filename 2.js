var inputArray = process.argv;
inputArray.splice(0, 2);
var sum = 0;
for (var index = inputArray.length; index--;) {
	sum += Number(inputArray.shift());
}
console.log(sum);

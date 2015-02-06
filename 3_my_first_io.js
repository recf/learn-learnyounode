var filepath = process.argv[2];

var fs = require('fs');

var buffer = fs.readFileSync(filepath)
var lines = buffer.toString().split('\n')
var numNewlines = lines.length - 1;

console.log(numNewlines);
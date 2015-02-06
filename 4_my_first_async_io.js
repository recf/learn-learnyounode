var filepath = process.argv[2];

var fs = require('fs');

fs.readFile(filepath, function(err, buffer) {
    var lines = buffer.toString().split('\n')
    var numNewlines = lines.length - 1;

    console.log(numNewlines);
});
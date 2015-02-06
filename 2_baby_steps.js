
var sum = 0;

for (i = 2; i < process.argv.length; i++)
{
    var arg = Number(process.argv[i]);    
    sum += arg;
}

console.log(sum)
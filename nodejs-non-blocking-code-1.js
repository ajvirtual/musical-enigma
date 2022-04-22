const fs = require('fs');

fs.readFile('./accounts.txt', function (error, contents) {
    console.log(contents)
});

console.log("Hello, Ruby");

fs.readFile('./ips.txt', function (error, contents) {
    console.log(contents);
});

console.log("Hello, World");
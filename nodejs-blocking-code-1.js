const fs = require('fs');
let contents;

contents = fs.readFileSync('./accounts.txt', 'utf8');
console.log(contents);
console.log('Hello, Ruby');

contents = fs.readFileSync('./ips.txt', 'utf8');
console.log(contents);
console.log('Hello, NodeJS');

const fs = require('fs');

console.log("we want to read from file");

fs.readFile('data.txt', 'utf-8', (err, data) => {
    console.log(data);
})

console.log("Done reading from file");

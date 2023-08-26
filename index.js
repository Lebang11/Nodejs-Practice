const fs = require('fs');

fs.readFile('./files/starter.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});

process.on('./files/hello.txt', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
});
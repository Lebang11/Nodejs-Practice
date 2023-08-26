const events = require('events');
const http = require('http');


let myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', (mssg) => {
    console.log(mssg)
});

myEmitter.emit('someEvent', 'the event was emitted');

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

/*
server.on('connection', (socket) => {
    console.log('new connection');
}) */

server.listen(4000);

console.log('Listening on port 4000...');
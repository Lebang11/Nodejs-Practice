const events = require('events');

let myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', (mssg) => {
    console.log(mssg)
});

myEmitter.emit('someEvent', 'the event was emitted');
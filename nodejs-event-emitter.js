const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Subject: start
// Event Observer
eventEmitter.on('start', (date) => console.log('started'));

// Event trigger
eventEmitter.emit('start', new Date());

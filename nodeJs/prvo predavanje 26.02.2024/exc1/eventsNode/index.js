import { EventEmitter } from 'events';

class MyEmitter extends EventEmitter { }

const emitter = new MyEmitter();



// Subscribers Method (the "event" keyword can be anything we desire.)
// emitter.on('event', () => {
//     console.log('Event has been triggered!');
// })

// // Emitters use "emit" method to do trigger the event.

// emitter.emit('event');



// // Subscribing for data

// emitter.on('data', (name1, name2, name3) => {
//     console.log('Event data has been triggered.');
//     console.log('Name: ', name1, name2, name3);
// });

// // Emmitting data

// emitter.emit('data', 'Stefan', 'Fico', 'Nikolce');



// Async event

// emitter.on('async', () => {
//     console.log(`Async event triggered.`);
// });

// setTimeout(() => {
//     emitter.emit('async');
// }, 1000);



// Chaining multiple events

// emitter
// .on('event-one', () => {
//     console.log('Event 1 triggered.');
// })
// .on('event-two', () => {
//     console.log('Event 2 triggered.');
// })

// Emitting multiple events

// emitter.emit('event-two');
// emitter.emit('event-one');



// Events: Once

// emitter.once('read-it-once', () => {
//     console.log(`Emitted once`);
// });

// emitter.emit('read-it-once');



// Order of execution of events

// emitter
//     .on('message', () => {
//         console.log('First message');
//     })
//     .on('message', () => {
//         console.log('Second message');
//     })
//     .on('message', () => {
//         console.log('Third message');
//     })
//     .prependListener('message', () => {
//         console.log('Prepend Listener');
//     })
//     .on('message', () => {
//         console.log('Fourth message');
//     })
//     .prependOnceListener('message', () => {
//         console.log('Prepened ONCE Listener');
//     });

// emitter.emit('message');



// Nested events

// emitter.on('inside', () => {
//     console.log('From the inside');
// })

// emitter.on('outside', () => {
//     emitter.emit('inside');
//     console.log('From the outside');
// });

// emitter.emit('outside');
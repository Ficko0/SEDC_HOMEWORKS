import emitter from "./index.js";
import Event from './events.js';

emitter.emit('test', 'Hello from the other side xd.');

emitter.emit(Event.drive);
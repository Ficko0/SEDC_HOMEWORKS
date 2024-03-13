import EventEmitter from 'events';
import { appendData } from './db.service';
import path from 'path';

class LoggerEmitter extends EventEmitter{};

const logsPath = path.join(import.meta.dirname, '../data/logs.txt');

const logger = new LoggerEmitter();
const currentTime = new Date().toISOString();

logger.on('log', (msg) => {

    const data = `
    ------------------------------------------
    ${msg}
    Logged at: ${currentTime}
    ------------------------------------------
    `
    appendData(logsPath, data);
})

export default logger;
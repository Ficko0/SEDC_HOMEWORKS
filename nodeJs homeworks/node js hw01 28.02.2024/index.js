import fsPromise from 'fs/promises';
import path from 'path';

const hwPath = path.join(import.meta.dirname, 'text.txt');


const homeworkExc = async () => {
    try {
        await fsPromise.writeFile(hwPath, 'Homework 01 in Basic Node');
        await fsPromise.appendFile(hwPath, 'FINISHED!');
        await fsPromise.readFile(hwPath, {encoding: 'utf-8'});
    }

    catch(err) {
        console.log(`Something went wrong: ${err}`);
    }

    finally {
        console.log('Done!');
    }
}

homeworkExc();
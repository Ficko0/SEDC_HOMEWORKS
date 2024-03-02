import fs from 'fs';
import path from 'path';
import fsPromises from 'fs/promises';

// FS Sync methods ==============================


const textFilePath = path.join(import.meta.dirname, 'nodePath.txt');

// fs.writeFileSync(textFilePath, 'This text is from the sync method of writing something in a file.') // => sinhrono go izvrshuva

// fs.appendFileSync(textFilePath, ' XD Appended text'); // => za dodavanje na neshto vo neshto SINHRONO

// const text = fs.readFileSync(textFilePath, { encoding: 'utf-8' })  // => sinhrono go chita

// console.log('Returned text: ', text);


// FS Async methods ==============================


// fs.writeFile(textFilePath, 'This is an async added text.', (err) => { // => ova prima parametar error.
//     console.log('Error from writeFile: ', err);
//     return;
// });

// fs.appendFile(textFilePath, 'Async appended text', (err) => { // => ova prima parametar error.
//     if (err) {
//         console.log('Error from appendFile: ', err);
//     }
// });

// fs.readFile(textFilePath, {encoding: 'utf-8'}, (err, data) => { // => ova prima dva fiksni parametri: error i data. 
//     if (err) {
//         console.log('Error from readFile: ', err);
//         return;
//     }
//     else {
//         console.log('Text from readFile: ', data);
//     }
// });

// console.log('Reading file ended');


// FS Promises and async / await


// fsPromises.writeFile(textFilePath, 'Text written using promises.').then((err) => {
//     if (err) {
//         console.log('Error while writing file: ', err);
//         return fsPromises.appendFile(textFilePath, 'Appended text using fsPromises.');
//     }
// }).then ((err) => {
//     if (err) {
//         console.log('Error while appending text: ', err);
//         return fsPromises.readFile(textFilePath, {encoding: 'utf-8'});
//     }
// }).then ((value) => {
//     console.log('Reading text: ', value);
// }).catch(err => {
//     console.log(err);
// }).finally(() => {
//     console.log('Finnaly do this.');
// })

const textReadingApp = async () => {
    try {
        await fsPromises.writeFile(textFilePath, 'Writing with async / await. ');
        await fsPromises.appendFile(textFilePath, 'Appended text.');
        const text = await fsPromises.readFile(textFilePath, {encoding: 'utf-8'});
        console.log(`The text is: ${text}`);
    }
    catch (err) {
        console.log(`Something went wrong: ${err}`);
    }
    finally {
        console.log('Using file nodePath is done!');
    }
}

textReadingApp();
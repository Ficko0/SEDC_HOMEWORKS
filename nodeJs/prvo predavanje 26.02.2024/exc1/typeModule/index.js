// import getUser, { getEmployee, SECRET_KEY } from './user.js'; // konkretno ja eksportira getUser konstantata od user.js faljot.
// console.log(getUser());
// console.log(getEmployee());
// console.log(SECRET_KEY);

// import * as user from './user.js' // losha praksa e i ne se koristi mnogu.

// improtiranje na fajl sistem
import fs from 'fs';


//importiranje path ili pateka
import path from 'path';
const newTextPath = path.join(import.meta.dirname, 'new.txt');
console.log(newTextPath);


// console.log('DirName: ', import.meta.dirname);
// console.log('FileName: ', import.meta.filename);

// fs.writeFileSync(newTextPath, 'Ova e test.');
const text = fs.readFileSync(newTextPath, { encoding: 'utf-8' });
console.log(text);


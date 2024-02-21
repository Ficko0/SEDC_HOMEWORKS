import fs from 'fs';

let files = fs.readdir('./');
console.log(files);

const fileName = 'example.txt';
const text = 'Hello from SEDC G2';

fs.writeFile(fileName, text, (err) => {
    if (err) {
        throw new Error(err);
    }
    console.log('File has been succesfully written');
})
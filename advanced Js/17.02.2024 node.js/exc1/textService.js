import fs from 'fs';

let files = fs.readdirSync("./");
console.log(files);

const fileName = 'example.txt';
const text = 'Hello from SEDC G2';

fs.writeFile(fileName, text, function (err) {
    if (err) {
        throw new Error(err);
    }
    console.log('File has been succesfully written');
})

let userJsonData = 'users.js';

fs.readFile(userJsonData, 'utf8', function (data, err) {
    if (err) {
        throw new Error(err);
    }
    console.log('Content of JSON file:', JSON.parse(data));
})
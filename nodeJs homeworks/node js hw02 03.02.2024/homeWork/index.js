import http from 'http';
import { url } from 'inspector';

const server = http.createServer((req, res) => {
    const URL = req.url;
    const all = '/all_students';

    if (URL === '/') {
        res.setHeader('Content-type', 'text/html');
        res.write('<h1>This is the main page!</h1>');
        res.end();
    }

    if (URL === '/student') {
        res.setHeader('Content-type', 'text/html');
        res.write(`
        <h1>Filip Zlatanovski</h1>
        <h2>Qinshift Academy / SEDC</h2>
        <h2>Current subject: NodeJS</h2>`
        )

        const chunks = [];

        req.on('data', (chunk) => {
            chunks.push(chunk);
        })

        req.on ('end', () => {
            const stringifiedChunks = Buffer.concat(chunks).toString();
            const studentName = stringifiedChunks.split('=')[1].replace('+', ' ');
            console.log(`The student name is: ${studentName}`);
        })

        res.end();
    }

    if (URL === '/all_students') {
        const studentChunks = [];

        res.setHeader('Content-type', 'text/html');

        req.on('data', (chunk) => {
            studentChunks.push(chunk);
        })

        
        req.on('end', () => {
            const strStudentName = Buffer.concat(studentChunks).toString();
            const cleanStudentName = strStudentName.split('=')[1].replace(/\+/g, ' ');
            res.end(`<h1>The name of the student is: ${cleanStudentName}</h1>`);
        });
        
    }

    if (URL === '/add_student') {
        res.setHeader('Content-type', 'text/html');
        res.write(
        `<form action= "${all}" method= 'POST'>
            <input type= 'text' name= 'studentName' placeholder= 'Student Name'/>
            <button type= 'submit'>Add student</button>
        </form>`
        );

        res.end();
    }
})

server.listen(3000);
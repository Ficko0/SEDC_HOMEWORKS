import http from 'http';
import { url } from 'inspector';

const server = http.createServer( (request, response) => {
//     console.log('URL: ', request.url);
//     console.log('Method: ', request.method);

//     // Prepare response to request !!!
//     response.write('Ok e, 3');

//     // Send response to client !!!
//     response.end();

const URL = request.url;

// '/' is a default route !!!
if (URL === '/') {
    response.setHeader('Content-type', 'text/html');
    response.write('<h1>Welcome to our server</h1>');
    response.end();
}

if (URL === '/something') {
    response.setHeader('Content-type', 'text/html');
    response.write('<h1>This is the /something route</h1>');
    response.end();
}

if (URL === '/movies') {
    response.setHeader('Content-type', 'text/html');
    response.write('<h1>We are at the /movies route</h1>');

    const chunks = []; // 

    request.on('data', (chunk) => {
        console.log(chunk);
        chunks.push(chunk);
    });

    // 'end' event is triggered when all data has been recieved
    request.on('end', () => {
        // we merge all chunks in a single string
        const parsedChunks = Buffer.concat(chunks).toString();
        console.log(parsedChunks);

        const movieName = parsedChunks.split('=')[1].replace('+', ' ');
        console.log(movieName);
    })

    response.end();
}

if (URL === '/add_movie') {
    response.setHeader('Content-type', 'text/html');
    response.write(
        `<form action= '/movies' method= 'POST'>
            <input type= 'text' name= 'movieName' />
            <button type= 'submit'>Add movie!</button>
        </form>`
    );
    response.end();
}

});

// // Default hostname: localhost || 127.0.0.1 !!!
// // Default port: 3000 !!!

server.listen(3000);

// npm install
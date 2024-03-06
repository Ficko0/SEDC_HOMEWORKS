import http from 'http';
import { v4 as uuidv4 } from 'uuid';
import { readData, writeData } from './text-service.js';

// req = request && res = response
const PORT = 3000;
const HOSTNAME = 'localhost';
const server = http.createServer((req, res) => {

    const URL = req.url;
    const METHOD = req.method;

    console.log(`URL: ${URL} - METHOD: ${METHOD}`);

    if (URL.startsWith('/reviews')) {
        // GET - selecting || fetching
        if (METHOD === 'GET') {
            res.setHeader('Content-type', 'text/json');
            const responseBody = readData();
            res.write(responseBody);
            res.end();
        }
        // POST - Creating 
        if (METHOD === 'POST') {
            let body = [];



            req.on('data', (chunk) => {
                body.push(chunk);
            })

            req.on('end', () => {

                const stringiyBody = Buffer.concat(body).toString();
                //     console.log(stringiyBody);

                let review = JSON.parse(stringiyBody);
                //     console.log(review);


                let udpatedReview = {
                    ...review,
                    id: uuidv4(),
                }

                let reviews = JSON.parse(readData());

                reviews.push(udpatedReview);

                const reviewsJSON = JSON.stringify(reviews);

                writeData(reviewsJSON);

                res.write(reviewsJSON);

                res.end();
            })

            res.end();
        }

        // PUT - UPDATING
        if (METHOD === 'PUT') {
            const urlArray = URL.split('/')
            const reviewId = urlArray[urlArray.length - 1];
            const body = [];

            req.on('data', (chunk) => {
                body.push(chunk);
            })

            req.on('end', () => {
                const stringiyBody = Buffer.concat(body).toString();

                const parsedBody = JSON.parse(stringiyBody);

                const reviews = JSON.parse(readData());

                const index = reviews.findIndex(r => r.id === reviewId);
                reviews[index] = {
                    ...parsedBody,
                    id: reviewId,
                }

                const stringifiedReviews = JSON.stringify(reviews);

                writeData(stringifiedReviews);

                res.write(stringifiedReviews);
                
                res.end();
            })
        }

        if (METHOD === 'DELETE') {
            // 1.
            const urlArray = URL.split('/');
            // 2.
            const reviewId = urlArray[urlArray.length - 1];
            // 3.
            const reviews = JSON.parse(readData());
            // 4.
            const filteredReviews = reviews.filter(review => review.id !== reviewId);
            // 5.
            JSON.stringify(filteredReviews);
            // 6.
            writeData(JSON.stringify(filteredReviews));
            // 7.
            res.write(`Review with ID ${reviewId} has been deleted.`);
            // 8.
            res.end();
        }
    }
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server has started, and it is listening on http://${HOSTNAME}:${PORT}`);
});
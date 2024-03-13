import express from 'express';
import path from 'path';
import router from './router.const.js';
import cors from 'cors';

const port = 3000;
const hostName = 'localhost';

const staticPagePath = path.join(import.meta.dirname, 'public');

const app = express();

app.use(express.json());

app.use(cors());

app.use('static-page', express.static(staticPagePath));

app.use('/api', router);

app.listen(port, hostName, () => {
    console.log(`Server: http://${hostName}:${port}`);
})
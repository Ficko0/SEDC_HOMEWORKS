import express from 'express';
import cors from 'cors';
import router from './const/router.const.js';

const app = express();

const port = 3000;
const hostName = 'localhost';

app.use(express.json());
app.use(cors());

app.use('/api', router);

app.listen(port, hostName, () => {
    console.log(`Server: http://${hostName}:${port}`);
})
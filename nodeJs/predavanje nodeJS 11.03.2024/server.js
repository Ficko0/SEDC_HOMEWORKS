import express from 'express';
import router from './consts/router.const.js';
import cors from 'cors';

const app = express();

const port = 3000;
const hostName = 'localhost';

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', router);

app.listen(port, hostName, () => {
    console.log(`Server: http://${hostName}:${port}`);
})
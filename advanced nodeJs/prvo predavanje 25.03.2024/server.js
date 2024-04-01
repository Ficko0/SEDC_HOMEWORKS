import 'dotenv/config';
import express from 'express';
import { globalRouter } from './src/const/router.const.js';

const app = express();

app.use(express.json());

app.use('/api', globalRouter);

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Server: http://${process.env.HOST}:${process.env.PORT}`);
})
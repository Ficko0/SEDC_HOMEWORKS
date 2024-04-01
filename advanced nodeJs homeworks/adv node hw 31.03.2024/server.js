import 'dotenv/config';
import express from 'express';
import { connect } from 'mongoose';
import globalRouter from './src/const/router.const.js';
import MONGO_URI from './src/const/db.const.js';

const app = express();
app.use(express.json());

app.use('/api', globalRouter);

connect(MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, process.env.HOST, () => {
            console.log(`Server: http://${process.env.HOST}:${process.env.PORT}`);
        })
    })
    .catch(err => {
        console.log(`Error:`, { err });
    })
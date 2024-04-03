import 'dotenv/config';
import MONGO_URI from './src/const/db.const.js';
import express from 'express';
import { connect } from 'mongoose';
import router from './src/const/router.const.js';

const app = express();
app.use(express.json());

app.use('/api', router);

connect(MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, process.env.HOST, async () => {
            console.log(`Server: http://${process.env.HOST}:${process.env.PORT}`);
        })
    })
    .catch(err => {
        console.log(`Error:`, { err });
    })

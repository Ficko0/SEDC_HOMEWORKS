import express from 'express';
import path from 'path';
import studentRoutes from './routes/student.route.js';
import cors from 'cors';

const app = express(); // kreira instanca od klasata express i se shto treba da se ima vo edna aplikacija ima so ovaa funkcija;
app.use(express.json());

// CORS
app.use(cors());

const PORT = 3000;

const HOSTNAME = 'localhost';

const staticPagePath = path.join(import.meta.dirname, 'public');

app.use('/static-page', express.static(staticPagePath));

app.use('/api', studentRoutes);

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server started listening at http://${HOSTNAME}:${PORT}`);
});
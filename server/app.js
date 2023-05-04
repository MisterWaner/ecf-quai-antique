//import modules
import express, { json, urlencoded } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import db from './db/db.config.js';

import roleRouter from './routes/roleRoute.js';

//Init server
config();
const app = express();

//Middleware
app.use(cors());
app.use(json());
app.use(urlencoded({extended: true}));


//Routes
app.get('/', (req, res) => {
    res.send('API en ligne');
});

app.use('/role', roleRouter);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});


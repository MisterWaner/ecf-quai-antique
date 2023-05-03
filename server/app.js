//import modules
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db/db.config.js');

//Init server
dotenv.config();
const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('API en ligne');
});

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});


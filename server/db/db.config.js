import { config } from 'dotenv';
import { createConnection } from 'mysql2';
config();

const db = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
}).promise();

db.connect((error) => {
    if(error) throw error;
    console.log('DB connected');
})


export default db;
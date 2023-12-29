import  express from 'express';
import dotenv from 'dotenv' ;

import Connection from './database/db.js';
import DefaultData from './default.js' ;
import Router from './routes/route.js';

const app = express();

app.use('/',Router)

dotenv.config();

const PORT =8000;
 
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);


app.listen(PORT, ()=> console.log(`Server is running successfully on PORT ${PORT}`));
 
DefaultData();
// import  express from 'express';
// import dotenv from 'dotenv' ;
// import cors from 'cors';
// import {v4 as uuid } from 'uuid';

// import Connection from './database/db.js';
// import DefaultData from './default.js' ;
// import Router from './routes/route.js';

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';


import Connection from './database/db.js';
import DefaultData from './default.js';
import router from './routes/route.js';




const app = express();


app.use(cors());
app.use('/', router)

dotenv.config();

const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

// Include the payment route
app.use("/payment", router);


// middlewares
app.use(express.json({ extended: false }));

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

DefaultData();



// export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
// export let paytmParams = {};
// paytmParams['MID'] = process.env.PAYTM_MID;
// paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
// paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
// paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
// paytmParams['ORDER_ID'] = uuid();
// paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
// paytmParams['TXN_AMOUNT'] = '1,00,000';
// paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback'; // payment karne k baad kya karna hai   usi api
// paytmParams['EMAIL'] = 'sunil.90155@gmail.com';
// paytmParams['MOBILE_NO'] = '9711544347';







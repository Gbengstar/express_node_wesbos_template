const express = require('express');
require('dotenv').config();
require('express-async-errors');
const cookieParser = require('cookie-parser');
const Cors = require('cors');

const app = express();

app.use(express.json());
app.use(cookieParser(process.env.SECRET, { signed: true }));
app.use(
    Cors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 200,
        maxAge: 1000,
        credentials: true,
        allowedHeaders: 'Access-Control-Allow-Headers, Content-Type,Authorization,content-type, X-Requested-With,token',
    })
);

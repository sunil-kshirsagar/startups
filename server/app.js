import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import bodyParser from "body-parser";
import mongoose from 'mongoose';

import startupRoutes from './src/modules/startups/startupRoutes';

import { ErrorHandler, handleError } from './util/error';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://sunil:sunil@cluster0.4ucnx.mongodb.net/startups?retryWrites=true&w=majority', { useNewUrlParser: true });

global.__basedir = __dirname;
/*************production purpose ************/
const helmet = require('helmet');
const compression = require('compression');

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

/*************produauthorizection purpose ************/
app.use(helmet());
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/startup', startupRoutes);

app.get('/', (req, res) => {
    return res.send(`Startup API`);
});

app.use('/error', (req, res) => {
    throw new ErrorHandler(500, 'Internal server error');
});

app.use((err, req, res, next) => {
    handleError(err, res);
});

module.exports = app;

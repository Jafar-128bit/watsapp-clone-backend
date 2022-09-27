const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const connectDatabase = require('./database/dbConnect');
const changeEventStream = require('./database/realTime');

const indexRouter = require('./routes/index');
const messageNew = require('./routes/messagesNew');
const messageGet = require('./routes/messagesSync');

const app = express();
connectDatabase();
changeEventStream();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((
    req,
    res,
    next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

app.use('/', indexRouter);
app.use('/api/v1/messages', messageNew);
app.use('/api/v1/messages',messageGet);

module.exports = app;

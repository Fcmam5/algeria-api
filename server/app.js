require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
// config
const MongoManager = require('./config/db');

// routes
const index = require('./routes');
const apiV1 = require('./routes/api/v1');
const apiAuthentication = require('./routes/api/auth');
const { handle404, handelServerErrors } = require('./controllers/handlers');

const app = express();

MongoManager.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());

app.use('/', cors(), index);
app.use('/api/auth', cors(), apiAuthentication);
app.use('/api/v1', cors(), apiV1);

// catch 404 and forward to error handler
app.use(handle404);

// error handler
app.use(handelServerErrors);

module.exports = app;

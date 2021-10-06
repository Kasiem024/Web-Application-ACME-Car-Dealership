'use strict';

const express = require('express');
const app = express();
const port = 8080;
const indexRouter = require('./routes/indexRoute');
const carsRouter = require('./routes/carsRoute');

app.use(express.static('public'));

app.use('/cars', carsRouter);
app.use('/', carsRouter);

app.listen(port);

console.log('Server up and running, listning on port: ' + port);
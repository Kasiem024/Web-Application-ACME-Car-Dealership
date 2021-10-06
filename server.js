'use strict';

const express = require('express');
const app = express();
const port = 8042;
const indexRouter = require('./routes/index');
const carsRouter = require('./routes/cars');
const carsRouterId = require('./routes/cars');


app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/cars', carsRouter);
app.use('/cars/1', carsRouterId);


app.listen(port);

console.log('Server up and running, listning on port: ' + port);
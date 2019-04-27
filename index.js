const ENV = process.env.NODE_ENV || 'local';
global.CONFIG = require(`${__dirname}/config/${ENV}.json`);

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect('mongodb://localhost/posters', { useNewUrlParser: true } );
const db = mongoose.connection;
db.on('error', () => console.log('mongodb connection failed'));
db.once('open', () => console.log('mongodb connection successfully'));

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(global.CONFIG.port, () => console.log(`Example app listening on port ${global.CONFIG.port}!`));

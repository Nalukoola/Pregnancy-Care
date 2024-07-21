require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use('/', routes);

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.listen(3000, () => console.log('Server Started at port 3000'));
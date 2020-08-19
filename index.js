'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

const server = require('./lib/models/server.js');
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DB_PATH, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

server.start(PORT);

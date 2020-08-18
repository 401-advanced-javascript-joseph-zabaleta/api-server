'use strict';

const express = require('express');
const app = express();
app.use(express.json());

/** Routers */
const productRouter = require('../routes/products.js');
const categoriesRouter = require('../routes/categories.js');

/** Middleware */
const timestamp = require('../middleware/timestamp.js');
const logger = require('../middleware/logger.js');
const errorHandler = require('../middleware/404.js');
const worstCaseHandler = require('../middleware/500.js');

app.use(timestamp);
app.use(logger);

app.use(productRouter);
app.use(categoriesRouter);

app.use(errorHandler);
app.use(worstCaseHandler);

function start(port) {
    app.listen(port, () => {
        console.log(`Server running on port:${port}`);
    });
};

module.exports = {
    server: app,
    start: start,
};

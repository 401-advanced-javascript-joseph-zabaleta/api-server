'use strict';

const express = require('express');
const app = express();
app.use(express.json());

/** Routers */
const productRouter = require('../routes/products.js');
const categoriesRouter = require('../routes/categories.js');

/** Middleware */
const logger = require('../middleware/logger.js');



app.use(logger);


app.use(productRouter);
app.use(categoriesRouter);


function start(port) {
    app.listen(port, () => {
        console.log(`Server running on port:${port}`);
    });
};

module.exports = {start};

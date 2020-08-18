'use strict';

function errorHandler(req, res, next) {
    console.log('Error Handler is Hooked up');
    next();
}

module.exports = errorHandler;

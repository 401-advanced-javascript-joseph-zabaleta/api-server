'use strict';

function logger(req, res, next) {
    console.log('something cool');
    next();
}

module.exports = logger;

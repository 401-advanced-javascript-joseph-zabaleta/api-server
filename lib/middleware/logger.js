'use strict';

function logger(req, res, next) {
    console.log('req =====', req);
    next();
}

module.exports = logger;

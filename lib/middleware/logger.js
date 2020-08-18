'use strict';

function logger(req, res, next) {
    console.log('Logger is Hooked Up');
    next();
}

module.exports = logger;

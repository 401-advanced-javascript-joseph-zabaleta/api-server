'use strict';

function logger(req, res, next) {

    let output = {};

    output.path = req.url;
    output.method = req.method;
    output.timestamp = req.timestamp;
    console.log('req =====', output);
    next();
}

module.exports = logger;

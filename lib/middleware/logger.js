'use strict';

function logger(req, res, next) {

    let output = {};

    output.path = req.url;
    output.method = req.method;
    output.timestamp = req.requestTime;
    console.log('Request: ', output);
    next();
}

module.exports = logger;

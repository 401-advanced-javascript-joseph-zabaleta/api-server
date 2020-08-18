'use strict';

function timestamp(req, res, next) {

    let today = new Date();
    let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
    let output = `${today.toDateString()}  ${time}`;

    req.timestamp = output;
    next();
};

module.exports = timestamp;

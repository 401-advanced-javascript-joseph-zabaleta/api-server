'use strict';

function timestamp(req, res, next) {
    console.log('Timestamp is Hooked Up');
    next();
}

module.exports = timestamp;

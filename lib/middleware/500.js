'use strict';

function successHandler(req, res, next) {
    console.log('Success Handler is Hooked up');
    next();
}

module.exports = successHandler;

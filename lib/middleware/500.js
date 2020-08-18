'use strict';

function worstCaseHandler(req, res, next) {
    console.log('Something horrible has happened');
    res.status(500);
    res.send('What have you done?')
    res.end();
};

module.exports = worstCaseHandler;

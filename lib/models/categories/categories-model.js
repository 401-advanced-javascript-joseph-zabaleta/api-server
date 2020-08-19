'use strict';

const schema = require('./categories-schema.js');
const MongoService = require('../mongo-service.js');


class Categories extends MongoService {
    constructor() {
        super(schema);
    };
};

module.exports = Categories;

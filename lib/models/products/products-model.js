'use strict';

const schema = require('./products-schema.js');
const MongoService = require('../mongo-service.js');


class Products extends MongoService {
    constructor() {
        super(schema);
    };
};

module.exports = new Products();

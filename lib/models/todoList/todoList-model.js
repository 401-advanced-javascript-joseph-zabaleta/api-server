'use strict';

const schema = require('./todoList-schema.js');
const MongoService = require('../mongo-service.js');


class TodoList extends MongoService {
    constructor() {
        super(schema);
    };
};

module.exports = new TodoList();


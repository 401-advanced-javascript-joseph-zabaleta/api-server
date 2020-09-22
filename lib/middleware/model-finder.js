'use strict';

const ProductsModel = require('../models/products/products-model.js');
const CategoriesModel = require('../models/categories/categories-model.js');
const TodoList = require('../models/todoList/todoList-model.js');
const errorHandler = require('../middleware/404.js');

function modelFinder(req, res, next) {

    switch (req.params.model) {
        case 'products':
            req.model = ProductsModel;
            next();
            break;
        case 'categories':
            req.model = CategoriesModel;
            next();
            break;
        case 'todolist':
            req.model = TodoList;
            next();
            break;
        default:
            errorHandler(req, res, next);
            break;
    };

};

module.exports = modelFinder;

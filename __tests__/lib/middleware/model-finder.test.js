'use strict';

const modelFinder = require('../../../lib/middleware/model-finder.js');
const ProductModel = require('../../../lib/models/products/products-model.js');
const CategoriesModel = require('../../../lib/models/categories/categories-model.js');


/**This is mocking the 404 error handler within the model finder module */
// jest.mock('../../../lib/middleware/404.js');
// const errorHandler = require('../../../lib/middleware/404.js');
// errorHandler.mockImplementation( () => {});


describe('Testing Model Finder Middleware Functionality: ', () => {

    it('Should properly add the category model onto the request: ', () => {

        let req = {
            params: {
                model: 'categories',
            },
        };

        let res = {};
        let next = jest.fn();

        modelFinder(req, res, next);

        expect(req.model).toBeDefined();
        expect(req.model).toEqual(CategoriesModel);

    });

    it('Should properly add the products model onto the request: ', () => {

        let req = {
            params: {
                model: 'products',
            },
        };

        let res = {};
        let next = jest.fn();

        modelFinder(req, res, next);

        expect(req.model).toBeDefined();
        expect(req.model).toEqual(ProductModel);

    });

    it('Should not receive a model on the request given an invalid model param ', () => {

        let req = {
            params: {
                model: 'foobar',
            },
        };

        let res = {};
        let next = jest.fn();

        expect(req.model).not.toBeDefined();

    });

});

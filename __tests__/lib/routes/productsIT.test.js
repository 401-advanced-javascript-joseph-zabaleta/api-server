'use strict';

const { server } = require('../../../lib/models/server.js');
const supertest = require('supertest');
// require('@code-fellows/supergoose');
require('../../supergoose.js');
const mockRequest = supertest(server);

let spyLog = jest.spyOn(console, 'log');
let spyError = jest.spyOn(console, 'error');

beforeEach( () => {
    spyLog.mockReset();
    spyError.mockReset();
});

describe('Products IT Tests', () => {

    it('Should respond with a 500 on an error', () => {

        return mockRequest
            .post('/products')
            .then(results => {
                expect(results.status).toBe(500);
            });

    });

    it('Should respond properly on request to /products', () => {

        return mockRequest
            .get('/products')
            .then(results => {
                expect(results.status).toBe(200);
            });
    });

    it('Should properly post to /products', () => {

        let testObject = { name: 'Red Bike', category: "bikes", description: 'apple bin', price: 20, inStock: 5 };

        return mockRequest
        .post('/products')
        .send(testObject)
        .then( (res) => {
            expect(res.status).toEqual(200);
        });

    });


    it('Should properly update a product', () => {

        let testObject = { name: 'Red Bike', category: "bikes", description: 'apple bin', price: 20, inStock: 5 };
        let updatedObject = { name: 'Blue Bike', category: "bikes", description: 'apple bin', price: 50, inStock: 5 };

        return mockRequest
            .post('/products')
            .send(testObject)
            .then( (res) => {
                expect(res.status).toEqual(200);
                let id = res.body._id;

                return mockRequest
                    .put('/products/' + id)
                    .send(updatedObject)
                    .then((response) => {
                        expect(response.status).toEqual(200);

                        return mockRequest
                            .get('/products/' + id)
                            .then( (results) => {
                                expect(results.status).toEqual(200);
                                expect(results.body.length).toEqual(1);
                                expect(results.body[0].name).toEqual(updatedObject.name);
                                expect(results.body[0].price).toEqual(updatedObject.price);
                                expect(results.body[0].category).toEqual(testObject.category);
                            });
                    });
            });
    });

    it('Should properly delete a product', () => {

        let testObject = { name: 'Red Bike', category: "bikes", description: 'apple bin', price: 20, inStock: 5 };

        return mockRequest
            .post('/products')
            .send(testObject)
            .then( (res) => {
                expect(res.status).toEqual(200);
                let id = res.body._id;

                return mockRequest
                    .delete('/products/' + id)
                    .then((response) => {
                        expect(response.status).toEqual(200);

                        return mockRequest
                            .get('/products/' + id)
                            .then( (results) => {
                                expect(results.status).toEqual(200);
                                expect(results.body.length).toEqual(0);
                            });
                    });
            });

    });

});

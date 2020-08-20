'use strict';

const { server } = require('../../../lib/models/server.js');
const supertest = require('supertest');
// require('@code-fellows/supergoose');
require('../../supergoose.js');
const mockRequest = supertest(server);

let version = '/api/v1';

// mockRequest = mockRequest.bind(mockRequest, )

let spyLog = jest.spyOn(console, 'log');
let spyError = jest.spyOn(console, 'error');

beforeEach( () => {
    spyLog.mockReset();
    spyError.mockReset();
});

describe('Categories IT Tests', () => {

    it('Should respond with a 500 on an error', () => {

        return mockRequest
            .put(version + '/categories/12345')
            .then(results => {
                expect(results.status).toBe(500);
            });

    });

    it('Should respond properly on request to /categories', () => {

        return mockRequest
            .get(version + '/categories')
            .then(results => {
                expect(results.status).toBe(200);
            });
    });

    it('Should properly post to /categories', () => {

        let testObject = { name: 'Red Bike', description: 'apple bin' };

        return mockRequest
        .post(version + '/categories')
        .send(testObject)
        .then( (res) => {
            expect(res.status).toEqual(200);
        });

    });


    it('Should properly update a product', () => {

        let testObject = { name: 'Red Bike', description: 'apple bin' };
        let updatedObject = { name: 'Blue Bike', description: 'pizza bin' };

        return mockRequest
            .post(version + '/categories')
            .send(testObject)
            .then( (res) => {
                expect(res.status).toEqual(200);
                let id = res.body._id;

                return mockRequest
                    .put(version + '/categories/' + id)
                    .send(updatedObject)
                    .then((response) => {
                        expect(response.status).toEqual(200);

                        return mockRequest
                            .get(version + '/categories/' + id)
                            .then( (results) => {
                                expect(results.status).toEqual(200);
                                expect(results.body.length).toEqual(1);
                                expect(results.body[0].name).toEqual(updatedObject.name);
                                expect(results.body[0].description).toEqual(updatedObject.description);
                            });
                    });
            });
    });

    it('Should properly delete a product', () => {

        let testObject = { name: 'Red Bike', description: 'apple bin' };

        return mockRequest
            .post(version + '/categories')
            .send(testObject)
            .then( (res) => {
                expect(res.status).toEqual(200);
                let id = res.body._id;

                return mockRequest
                    .delete(version + '/categories/' + id)
                    .then((response) => {
                        expect(response.status).toEqual(200);

                        return mockRequest
                            .get(version + '/categories/' + id)
                            .then( (results) => {
                                expect(results.status).toEqual(200);
                                expect(results.body.length).toEqual(0);
                            });
                    });
            });

    });

});

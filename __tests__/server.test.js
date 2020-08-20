'use strict';

const { server } = require('../lib/models/server.js');
const supertest = require('supertest');
// require('@code-fellows/supergoose');
require('./supergoose.js');
const mockRequest = supertest(server);

let spyLog = jest.spyOn(console, 'log');
let spyError = jest.spyOn(console, 'error');

beforeEach( () => {
    spyLog.mockReset();
    spyError.mockReset();
});

describe('Testing server IT functionality:', () => {

    it('Should respond with a 404 on an invalid route', () => {

    return mockRequest
        .get('/foobar')
        .then(results => {
            expect(results.status).toBe(404);
        })

    });

    it('Should respond with a 404 on an invalid method', () => {

    return mockRequest
        .post('/')
        .then(results => {
            expect(results.status).toBe(404);
        })

    });

});



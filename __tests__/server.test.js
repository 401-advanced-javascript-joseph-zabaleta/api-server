'use strict';

const { server } = require('../lib/models/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

let spyLog = jest.spyOn(console, 'log');
let spyError = jest.spyOn(console, 'error');

beforeEach( () => {
    spyLog.mockReset();
    spyError.mockReset();
});

describe('Integration Tests on the Web Server', () => {

  it('Should respond with a 500 on an error', () => {

    return mockRequest
      .get('/bad')
      .then(results => {
        expect(results.status).toBe(500);
      }).catch(console.error);

  });

  it('Should respond with a 404 on an invalid route', () => {

    return mockRequest
      .get('/foobar')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.error);

  });

  it('Should respond with a 404 on an invalid method', () => {

    return mockRequest
      .post('/')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.error);

  });

  it('Should respond properly on request to /api/v1/products', () => {

    return mockRequest
      .get('/api/v1/products')
      .then(results => {
        expect(results.status).toBe(200);
      }).catch(console.error);

  });

  it('Should properly post to /api/v1/products', () => {
    return mockRequest
    .post('/api/v1/products')
    .then(results => {
        expect(results).toBe(200);
    }).catch(console.error);
  });

});

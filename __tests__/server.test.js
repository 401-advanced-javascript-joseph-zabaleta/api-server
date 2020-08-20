'use strict';

const { server } = require('../lib/models/server.js');
const supertest = require('supertest');
require('@code-fellows/supergoose');
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
      .post('/products')
      .then(results => {
        expect(results.status).toBe(500);
      })

  });

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

  it('Should respond properly on request to /products', () => {

    return mockRequest
      .get('/products')
      .then(results => {
        expect(results.status).toBe(200);
      })
  });

  it('Should properly post to /products', () => {

    let testObject = { name: 'Red Bike', category: "bikes", description: 'apple bin', price: 20, inStock: 5 };

    return mockRequest
    .post('/products')
    .send(testObject)
    .then( (res) => {
        console.log('resssssss', res);
        expect(res.status).toEqual(200);
    });

  });

});

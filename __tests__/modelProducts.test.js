'use strict';

const supergoose = require('@code-fellows/supergoose');

const ProductModel = require('../lib/models/products/products-model.js');

let testObject = { name: 'Red Bike', category: "bikes", description: 'apple bin', price: 20, inStock: 5 };

describe('Testing Products Model Functionality: ', () => {
  it('Should create() a new product record', () => {
    return ProductModel.create(testObject)
      .then(record => {
        Object.keys(testObject).forEach(key => {
          expect(record[key]).toEqual(testObject[key]);
        });
      });
  });

  it('Should get() all product records', () => {
    return ProductModel.get()
      .then(foundObject => {
        Object.keys(testObject).forEach(key => {
          expect(foundObject[0][key]).toEqual(testObject[key]);
        });
      });
  });

});

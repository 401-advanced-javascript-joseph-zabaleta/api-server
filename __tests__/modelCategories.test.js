'use strict';

const supergoose = require('@code-fellows/supergoose');

const CategoriesModel = require('../lib/models/categories/categories-model.js');

let testObject = { name: 'fruit', description: 'apple bin' };

describe('Testing Categories Model Functionality: ', () => {
  it('Should create() a new category record', () => {
    return CategoriesModel.create(testObject)
      .then(record => {
        Object.keys(testObject).forEach(key => {
          expect(record[key]).toEqual(testObject[key]);
        });
      });
  });

  it('Should get() all category records', () => {
    return CategoriesModel.get()
      .then(foundObject => {
        Object.keys(testObject).forEach(key => {
          expect(foundObject[0][key]).toEqual(testObject[key]);
        });
      });
  });

});

'use strict';

// require('@code-fellows/supergoose');
require('../../supergoose.js');

const ProductModel = require('../../../lib/models/products/products-model.js');

let testObject = { name: 'Red Bike', category: "bikes", description: 'apple bin', price: 20, inStock: 5 };
let testObject2 = { name: 'Blue Bike', category: "bikes", description: 'faster style biking', price: 200, inStock: 2 };

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

  it('Should get() a product by ID', () => {
      return ProductModel.create(testObject2)
      .then(record => {
          return record._id;
      })
      .then(id => {
          return ProductModel.get(id)
      })
      .then(foundObject => {
        expect(foundObject.length).toEqual(1);
        Object.keys(testObject2).forEach(key => {
            expect(foundObject[0][key]).toEqual(testObject2[key]);
        });
      });
    });

    it('Should update() a product', () => {

        let recordID;

        return ProductModel.get()
        .then(records => {
            return records[1]._id;
        })
        .then(id => {
            let body = {
                name: 'Greeeeeeeeen Bike',
            };

            recordID = id;
            return ProductModel.update(id, body);

        })
        .then( () => {
            return ProductModel.get(recordID);
        })
        .then(foundObject => {
            expect(foundObject.length).toEqual(1);
            expect(foundObject[0].name).toEqual('Greeeeeeeeen Bike');
        })
    });

    it('Should delete() a product', () => {
        return ProductModel.get()
        .then(records => {
            return records[1]._id;
        })
        .then(id => {
            return ProductModel.delete(id);
        })
        .then(results => {
            return ProductModel.get(results._id);
        })
        .then(foundObject => {
            expect(foundObject).toEqual([]);
        })
    });
});

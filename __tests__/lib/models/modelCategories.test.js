'use strict';

// require('@code-fellows/supergoose');
require('../../supergoose.js');

const CategoriesModel = require('../../../lib/models/categories/categories-model.js');

let testObject = { name: 'fruit', description: 'apple bin' };
let testObject2 = { name: 'sports', description: 'sports bin' };

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


    it('Should get() a category by ID', () => {
        return CategoriesModel.create(testObject2)
        .then(record => {
            return record._id;
        })
        .then(id => {
            return CategoriesModel.get(id)
        })
        .then(foundObject => {
            expect(foundObject.length).toEqual(1);
            Object.keys(testObject2).forEach(key => {
                expect(foundObject[0][key]).toEqual(testObject2[key]);
            });
        });
    });


    it('Should update() a category', () => {

        let recordID;

        return CategoriesModel.get()
        .then(records => {
            return records[1]._id;
        })
        .then(id => {
            let body = {
                name: 'Skateboards',
            };
            recordID = id;
            return CategoriesModel.update(id, body);

        })
        .then( () => {
            return CategoriesModel.get(recordID);
        })
        .then(foundObject => {
            expect(foundObject.length).toEqual(1);
            expect(foundObject[0].name).toEqual('Skateboards');
        })

    });

    it('Should delete() a category', async () => {
        let list = await CategoriesModel.get()
        let id = list[1]._id;

        await CategoriesModel.delete(id);

        let result = await CategoriesModel.get(id);

        expect(result).toEqual([]);

    });



});

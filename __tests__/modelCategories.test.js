'use strict';

const supergoose = require('@code-fellows/supergoose');

const CategoriesModel = require('../lib/models/categories/categories-model.js');

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
            Object.keys(testObject2).forEach(key => {
                expect(foundObject[0][key]).toEqual(testObject2[key]);
            });
        });
    });


    it('Should update() a category', () => {
        return CategoriesModel.get()
        .then(records => {
            return records[1]._id;
        })
        .then(id => {
            let body = {
                name: 'Skateboards',
            };

            return CategoriesModel.update(id, body);

        })
        .then(results => {
            return CategoriesModel.get(results._id);
        })
        .then(foundObject => {
            expect(foundObject[1].name).toEqual('Skateboards');
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

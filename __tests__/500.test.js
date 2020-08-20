'use strict';

const worstCaseHandler = require('../lib/middleware/timestamp.js');

describe.skip('Testing 505 Middleware Functionality', () => {


    it('Should properly add a 505 status to the request', () => {
        let req = {
            body: 'some dummy data',
            count: 12312,
            path: '/blah/test/blah',
        };

        let res = {};
        let next = jest.fn();
        worstCaseHandler(req, res, next);

        let actual = res.status;

        expect(actual).toEqual(1);

    });

});

'use strict';

const timestamp = require('../../../lib/middleware/timestamp.js');

describe('Testing Timestamp Middleware Functionality: ', () => {


    it('Should properly add a timestamp to the request', () => {
        let req = {
            body: 'some dummy data',
            count: 12312,
            path: '/blah/test/blah',
        };

        let res = {};
        let next = jest.fn();
        timestamp(req, res, next);

        let actual = req.requestTime;

        expect(actual).not.toBeNull();

    });

});

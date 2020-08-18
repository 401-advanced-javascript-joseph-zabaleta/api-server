const logger = require('../lib/middleware/logger.js');

// Tested middleware needs to either be exported from the server or a separate module
describe('Testing Logger Middleware functionality:', () => {

  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('Should properly log an output to the console', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('Should properly move on to the next middleware', () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalledWith(); // no params
  });

});

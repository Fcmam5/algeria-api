const { isInWilayasRange } = require('../../middlewares');
const { mockRequest, mockResponse } = require('../../../test-utils');

describe('Test middlewares', () => {
  it('should return a 400 error if the parameter is not a number', () => {
    const req = mockRequest({ matricule: '1hello' });
    const res = mockResponse();
    const next = jest.fn();

    isInWilayasRange(req, res, next);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ err: 'Bad request! "matricule" parameter must be a number between 1 and 48' });
  });

  it('should return a 400 error if the parameter less than 1', () => {
    const req = mockRequest({ matricule: '0' });
    const res = mockResponse();
    const next = jest.fn();

    isInWilayasRange(req, res, next);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ err: 'Bad request! "matricule" parameter must be a number between 1 and 48' });
  });

  it('should return a 400 error if the parameter greater than 48', () => {
    const req = mockRequest({ matricule: '49' });
    const res = mockResponse();
    const next = jest.fn();

    isInWilayasRange(req, res, next);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ err: 'Bad request! "matricule" parameter must be a number between 1 and 48' });
  });

  it('should pass if the parameter is a number between 1 and 48', () => {
    const req = mockRequest({ matricule: '31' });
    const res = mockResponse();
    const next = jest.fn();
    isInWilayasRange(req, res, next);
    expect(next).toBeCalled();
  });
});

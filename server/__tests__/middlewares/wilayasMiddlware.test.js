const boom = require('@hapi/boom');
const { isInWilayasRange, isValidPhoneCode } = require('../../middlewares/wilayasMiddlware');
const { mockRequest, mockResponse } = require('../../../test-utils');

const wilyaNotInRangeError = boom.badRequest('Bad request! "matricule" parameter must be a number between 1 and 48');
const incorrectPhoneCodeError = boom.badRequest('Bad request! incorrect phone code');

describe('test middlewares', () => {
  describe('isInWilayasRange', () => {
    it('should return a HTTP 400 error if the parameter is not a number', () => {
      const req = mockRequest({ matricule: '1hello' });
      const res = mockResponse();
      const next = jest.fn();

      isInWilayasRange(req, res, next);
      expect(next).toHaveBeenCalledWith(wilyaNotInRangeError);
    });

    it('should return a HTTP 400 error if the parameter less than 1', () => {
      const req = mockRequest({ matricule: '0' });
      const res = mockResponse();
      const next = jest.fn();

      isInWilayasRange(req, res, next);
      expect(next).toHaveBeenCalledWith(wilyaNotInRangeError);
    });

    it('should return a HTTP 400 error if the parameter greater than 48', () => {
      const req = mockRequest({ matricule: '49' });
      const res = mockResponse();
      const next = jest.fn();

      isInWilayasRange(req, res, next);
      expect(next).toHaveBeenCalledWith(wilyaNotInRangeError);
    });

    it('should pass if the parameter is a number between 1 and 48', () => {
      const req = mockRequest({ matricule: '31' });
      const res = mockResponse();
      const next = jest.fn();

      isInWilayasRange(req, res, next);
      expect(next).toHaveBeenCalledTimes(1);
    });
  });

  describe('isValidPhoneCode', () => {
    it('should return HTTP 400 if the phone code is empty', () => {
      const req = mockRequest(null, { code: '' });
      const res = mockResponse();
      const next = jest.fn();

      isValidPhoneCode(req, res, next);
      expect(next).toHaveBeenCalledWith(incorrectPhoneCodeError);
    });

    it('should return HTTP 400 if the phone code is not numeric', () => {
      const req = mockRequest(null, { code: 'a41' });
      const res = mockResponse();
      const next = jest.fn();

      isValidPhoneCode(req, res, next);
      expect(next).toHaveBeenCalledWith(incorrectPhoneCodeError);
    });

    it('should return HTTP 400 if the phone code is <1', () => {
      const req = mockRequest(null, { code: '0' });
      const res = mockResponse();
      const next = jest.fn();

      isValidPhoneCode(req, res, next);
      expect(next).toHaveBeenCalledWith(incorrectPhoneCodeError);
    });

    it('should pass if the phone code has a valid format', () => {
      const req = mockRequest(null, { code: 41 });
      const res = mockResponse();
      const next = jest.fn();

      isValidPhoneCode(req, res, next);
      expect(next).toHaveBeenCalledTimes(1);
    });
  });
});

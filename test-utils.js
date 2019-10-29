const supertest = require('supertest');
const app = require('./server/app');
/**
 * Mock request object
 * @param {Object} params
 * @param {Object} body
 * @param {Object} session
 */
function mockRequest(params, body, session) {
  return { params, body, session };
}

function mockResponse() {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
}

function getServer() {
  return supertest(app);
}

module.exports = {
  mockRequest,
  mockResponse,
  getServer,
};

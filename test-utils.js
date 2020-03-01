const supertest = require('supertest');
const app = require('./server/app');

const server = supertest(app);

/**
 * Mock request object
 * @param {Object} params
 * @param {Object} body
 * @param {Object} session
 */
function mockRequest(params, query, body, session) {
  return {
    params,
    query,
    body,
    session,
  };
}

function mockResponse(status, jsonObject) {
  return {
    status: jest.fn().mockReturnValue(status),
    json: jest.fn().mockReturnValue(jsonObject),
  };
}

const getServer = () => server;
module.exports = {
  mockRequest,
  mockResponse,
  getServer,
};

/**
 * Mock request object
 * @param {Object} params
 * @param {Object} body
 * @param {Object} session
 */
function mockRequest(params, query, body, session) {
  return {
    params, query, body, session,
  };
}

function mockResponse() {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
}

module.exports = {
  mockRequest,
  mockResponse,
};

/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const { getServer } = require('../../test-utils');

const server = getServer();

describe('catch 404 and forward to error handler', () => {
  it('should return 404', () => {
    server
      .get('/completely-random-url')
      .expect(404);
  });
});

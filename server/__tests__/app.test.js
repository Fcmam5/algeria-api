const { getServer } = require('../../test-utils');

const server = getServer();

describe('Catch 404 and forward to error handler', () => {
  it('should return 404', (done) => {
    server
      .get('/completely-random-url')
      .expect(404, done);
  });
});

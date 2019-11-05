const { getServer } = require('../../../test-utils');

const server = getServer();

describe('Index "/"', () => {
  it('should return a JSON response', async () => {
    const response = await server.get('/');
    expect(response.type).toBe('application/json');
    expect(response.statusCode).toBe(200);
  });
});

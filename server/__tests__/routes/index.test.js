const request = require('supertest');
const app = require('../../app');

describe('Test the root path', () => {
  test('It should response the GET method', () => request(app).get('/').expect(200));
});

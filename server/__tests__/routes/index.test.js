// const request = require('supertest');
// const app = require('../../app');

// describe('Test the wilaya API', () => {
//   it('should response the GET method on list endpoint', () => request(app).get('/api/v1/wilaya').expect(200));
//   it('should response the GET method on wilaya by matricule endpoint', () => request(app).get('/api/v1/wilaya/matricule/31').expect(200));
//   it('should response by bad request on requests with wrong matricule', () => request(app).get('/api/v1/wilaya/matricule/h31').expect(400));
// });

// const wilayaController = require('../../controllers/wilayaController');
const { getServer } = require('../../../test-utils');

const server = getServer();

describe('Router', () => {
  it('shold return a 200 response when calling /', () => {
    server.get('/api/v1/').expect(200);
  });
  // describe('Wilaya list', () => {
  //   it('should return a JSON list of wilayas', () => {
  //     server
  //       .get('/api/v1/wilaya')
  //       .expect(200);
  //   });
  // });
});

// const request = require('supertest');
// const app = require('../../app');

// describe('Test the wilaya API', () => {
//   it('should response the GET method on list endpoint', () => request(app).get('/api/v1/wilaya').expect(200));
//   it('should response the GET method on wilaya by matricule endpoint', () => request(app).get('/api/v1/wilaya/matricule/31').expect(200));
//   it('should response by bad request on requests with wrong matricule', () => request(app).get('/api/v1/wilaya/matricule/h31').expect(400));
// });

// const wilayaController = require('../../controllers/wilayaController');
const { getServer } = require('../../../../../test-utils');

const server = getServer();

describe('WilayaRouter', () => {
  describe('Wilaya list "/api/v1/wilaya/"', () => {
    it('should return a JSON response', async () => {
      const response = await server.get('/api/v1//wilaya');
      expect(response.type).toBe('application/json');
      expect(response.statusCode).toBe(200);
    });

    it('should return a XML response when providing "format=xml" parameter', async () => {
      const response = await server.get('/api/v1//wilaya?format=xml');
      expect(response.type).toBe('application/xml');
      expect(response.statusCode).toBe(200);
    });

    // TODO Test list length..
  });

  describe('Get a wilaya by code "/api/v1/wilaya/matricule/:matricule"', () => {
    it('should return a JSON response', async () => {
      const response = await server.get('/api/v1/wilaya/matricule/31');
      expect(response.type).toBe('application/json');
      expect(response.statusCode).toBe(200);
    });

    it('should return a XML response when providing "format=xml" parameter', async () => {
      const response = await server.get('/api/v1/wilaya/matricule/31?format=xml');
      expect(response.type).toBe('application/xml');
      expect(response.statusCode).toBe(200);
    });
  });

  describe('Get adjacent wilayas "/wilaya/adjacence/:matricule/"', () => {
    it('should return a JSON response', async () => {
      const response = await server.get('/api/v1/wilaya/adjacence/31/');
      expect(response.type).toBe('application/json');
      expect(response.statusCode).toBe(200);
    });

    it('should return a XML response when providing "format=xml" parameter', async () => {
      const response = await server.get('/api/v1/wilaya/adjacence/31?format=xml');
      expect(response.type).toBe('application/xml');
      expect(response.statusCode).toBe(200);
    });
  });

  describe('Get adjacent wilayas "/wilaya/adjacence/:matricule/names"', () => {
    it('should return a JSON response', async () => {
      const response = await server.get('/api/v1/wilaya/adjacence/31/names');
      expect(response.type).toBe('application/json');
      expect(response.statusCode).toBe(200);
    });

    it('should return a XML response when providing "format=xml" parameter', async () => {
      const response = await server.get('/api/v1/wilaya/adjacence/31/names?format=xml');
      expect(response.type).toBe('application/xml');
      expect(response.statusCode).toBe(200);
    });
  });
});

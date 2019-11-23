const { getServer } = require('../../../../../test-utils');

const server = getServer();

describe('wilayaRouter', () => {
  describe('wilaya list "/api/v1/wilaya/"', () => {
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

  describe('get a wilaya by code "/api/v1/wilaya/matricule/:matricule"', () => {
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

  describe('get adjacent wilayas "/wilaya/adjacence/:matricule/"', () => {
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

  describe('get adjacent wilayas "/wilaya/adjacence/:matricule/names"', () => {
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

  describe('get wilayas by phone codes "/wilaya/phone-codes"', () => {
    it('should return a JSON response if phone codes are provided', async () => {
      const response = await server.get('/api/v1/wilaya/phone-codes?code=41');
      expect(response.type).toBe('application/json');
      expect(response.statusCode).toBe(200);
    });

    it('should return a XML response when providing "format=xml" parameter', async () => {
      const response = await server.get('/api/v1/wilaya/phone-codes?format=xml&code=41');
      expect(response.type).toBe('application/xml');
      expect(response.statusCode).toBe(200);
    });

    it('should return a 404 if no wilaya is found', async () => {
      const response = await server.get('/api/v1/wilaya/phone-codes?code=1337');
      expect(response.statusCode).toBe(404);
    });

    it('should return a 400 if the code parameter is not provided', async () => {
      const response = await server.get('/api/v1/wilaya/phone-codes?code=foo');
      expect(response.statusCode).toBe(400);
    });
  });
});

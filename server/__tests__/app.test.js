describe('main Express Application', () => {
  let mockedExpress;
  let mockedBodyParser;
  let mockMongoDBManager;

  beforeEach(() => {
    mockedExpress = () => mockedExpress;
    mockedExpress.use = jest.fn();
    mockedExpress.disable = jest.fn();
    mockedExpress.listen = jest.fn().mockImplementation((port, cb) => cb());
    mockedExpress.static = () => null;
    mockedExpress.Router = () => ({ get: jest.fn(), post: jest.fn(), patch: jest.fn(), put: jest.fn() });

    mockedBodyParser = {
      json: jest.fn(),
      urlencoded: jest.fn(),
    };

    mockMongoDBManager = {
      connect: jest.fn(),
    };

    jest.mock('body-parser', () => mockedBodyParser);
    jest.mock('express', () => mockedExpress);
    jest.mock('../config/db', () => mockMongoDBManager);

    require('../app');
  });

  afterEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });


  it('should register body parser', async () => {
    expect(mockedExpress.use).toHaveBeenCalledWith(mockedBodyParser.json());
    expect(mockedExpress.use).toHaveBeenCalledWith(
      expect(mockedBodyParser.urlencoded).toHaveBeenCalledWith({ extended: false }),
    );
  });

  it('should connect to MongoDB server', () => {
    expect(mockMongoDBManager.connect).toHaveBeenCalledTimes(1);
  });
});

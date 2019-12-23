const boom = require('@hapi/boom');
const { verifyJWTToken } = require('../config/auth');
const { UserValidators } = require('../validations');

const Middlewares = {
  validateJWTToken: async (req, res, next) => {
    const token = req.body.token || req.query.token;

    try {
      const decodedToken = await verifyJWTToken(token);
      req.user = decodedToken.data;
      return next();
    } catch (err) {
      // token was not sent with request send error to user
      return next(boom.badRequest('Bad token provided!'));
    }
  },
  validateLoginCredentials: (req, res, next) => {
    const { error } = UserValidators.validateLoginCredentials(req.body);

    if (error) {
      return next(boom.badRequest('Bad login credentials!'));
    }

    return next();
  },
  validateSignupBody: (req, res, next) => {
    const { error } = UserValidators.validateSignupBody(req.body);

    if (error) {
      return next(boom.badRequest(error));
    }
    return next();
  },
};

module.exports = Middlewares;

const boom = require('@hapi/boom');
const { verifyJWTToken } = require('../config/auth');

const Middlewares = {
  verifyJWTToken: async (req, res, next) => {
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
};

module.exports = Middlewares;

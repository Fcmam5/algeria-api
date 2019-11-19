const boom = require('@hapi/boom');
const logger = require('../config/logger');

const Handlers = {
  handle404: (req, res, next) => next(boom.notFound('Page not found!')),
  handelServerErrors: (err, req, res, next) => {
    if (err.isServer) { logger.error(err); }
    return res
      .status(err.output.statusCode)
      .json(err.output.payload);
  },
};


module.exports = Handlers;

const boom = require('@hapi/boom');
const logger = require('../config/logger');

const Handlers = {
  handle404: (req, res, next) => next(boom.notFound('Page not found!')),
  handelServerErrors: (err, req, res) => {
    if (err.isServer) { logger.error(err); }
    return res
      .status(err.output ? err.output.statusCode : 500)
      .json(err.output.payload);
  },
};


module.exports = Handlers;

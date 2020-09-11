const boom = require('@hapi/boom');
const logger = require('../config/logger');

const Handlers = {
  handle404: (req, res, next) => next(boom.notFound('Page not found!')),
  handelServerErrors: (err, req, res) => {
    logger.warn(err);
    const { isBoom } = err;
    const statusCode = isBoom ? err.output.statusCode : err.statusCode;
    const { message } = err;

    return res.status(statusCode).json({
      status: 'error',
      statusCode,
      message,
    });
  },
};


module.exports = Handlers;

const boom = require('@hapi/boom');

const Handlers = {
  handle404: (req, res, next) => next(boom.notFound('Page not found!')),
};


module.exports = Handlers;

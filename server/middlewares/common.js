const boom = require('@hapi/boom');
const { validateReponseTypes } = require('../validations/common');
const { supportedReponseTypes } = require('../utils/constants');

const Middlewares = {
  isValidResponseType: (req, res, next) => {
    const resFormat = req.query.format;
    const { error } = validateReponseTypes(resFormat);
    if (error) {
      return next(boom.badRequest(
        `Bad request! "format" must be one of ${supportedReponseTypes.join(' ,')}`,
      ));
    }

    next();
  },
};

module.exports = Middlewares;

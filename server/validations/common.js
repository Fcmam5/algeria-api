const Joi = require('@hapi/joi');
const { supportedReponseTypes } = require('../utils/constants');

const reponseTypes = {
  query: Joi.string().valid(...supportedReponseTypes).default('json'),
};

module.exports = {
  validateReponseTypes: resType => reponseTypes.query.validate(resType),
};

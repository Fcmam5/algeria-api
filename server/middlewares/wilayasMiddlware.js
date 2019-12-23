const boom = require('@hapi/boom');
const { WilayaValidator } = require('../validations');

const Middlewares = {
  /**
   * Reject requests if :matricule parameter is not a number or when it's not in the range [1:48]
   */
  isInWilayasRange: (req, res, next) => {
    const { matricule } = req.params;
    const { error } = WilayaValidator.isInWilayasRange(matricule);
    if (error) {
      return next(boom.badRequest('Bad request! "matricule" parameter must be a number between 1 and 48'));
    }

    return next();
  },
  isValidPhoneCode: (req, res, next) => {
    const { code } = req.query;
    const { error } = WilayaValidator.isValidPhoneCode(code);
    if (error) {
      return next(boom.badRequest('Bad request! incorrect phone code'));
    }

    return next();
  },
};

module.exports = Middlewares;

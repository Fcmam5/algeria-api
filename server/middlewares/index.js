const { WilayaValidator } = require('../validations');

const Middlewares = {
  /**
   * Reject requests if :matricule parameter is not a number or when it's not in the range [1:48]
   */
  isInWilayasRange: (req, res, next) => {
    const { matricule } = req.params;
    const { error } = WilayaValidator.isInWilayasRange(matricule);
    if (error) {
      return res.status(400).json({ err: 'Bad request! "matricule" parameter must be a number between 1 and 48' });
    }

    return next();
  },
};

module.exports = Middlewares;

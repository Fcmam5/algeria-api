const joi = require('@hapi/joi');
const { dairatSchema, dairatUpdateSchema } = require('./validation');


const createValidation = theSchema => async ({ body }, res, next) => {
  try {
    await joi.validate(body, theSchema);
    next();
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

const Middlewares = {
  /**
   * Reject requests if :matricule parameter is not a number or when it's not in the range [1:48]
   */
  isInWilayasRange: (req, res, next) => {
    const { matricule } = req.params;
    const matr = Number(matricule);
    if (Number.isNaN(matr) || matr < 1 || matr > 48) {
      return res.status(400).json({ err: 'Bad request! "matricule" parameter must be a number between 1 and 48' });
    }

    return next();
  },
  validateBody: createValidation(dairatSchema),
  validateUpdateOp: createValidation(dairatUpdateSchema),
  findDairat: ({ wilaya, params: { daira } }, res, next) => {
    const thedairat = wilaya.dairats.find(d => d == daira); // eslint-disable-line 
    if (!thedairat) {
      const err = new Error(`dairat ${daira} not found`);
      err.status = 404;
      throw err;
    }
    return next();
  },

};

module.exports = Middlewares;

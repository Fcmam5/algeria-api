const joi = require('@hapi/joi');
const { wilayaSchema, wilayaUpdateSchema } = require('./validation');


const createValidation = theSchema => async ({ body }, res, next) => {
  try {
    await joi.validate(body, theSchema);
    next();
  } catch (error) {
    error.status = 400;
    console.error(error);
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
  validateBody: createValidation(wilayaSchema),
  validateUpdateOp: createValidation(wilayaUpdateSchema),
};

module.exports = Middlewares;

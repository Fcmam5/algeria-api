const joi = require('@hapi/joi');


const createValidation = theSchema => async ({ body }, res, next) => {
  try {
    await joi.validate(body, theSchema);
    next();
  } catch (error) {
    error.status = 400;
    next(error);
  }
};
const isInWilayasRange = (req, res, next) => {
  const { matricule } = req.params;
  const matr = Number(matricule);
  if (Number.isNaN(matr) || matr < 1 || matr > 48) {
    return res.status(400).json({ err: 'Bad request! "matricule" parameter must be a number between 1 and 48' });
  }

  return next();
};
module.exports = (schema, updateSchema) => ({
  isInWilayasRange,
  validateBody: createValidation(schema),
  validateUpdateOp: createValidation(updateSchema),
});

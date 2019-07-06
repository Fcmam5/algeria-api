const { dairatSchema, dairatUpdateSchema } = require('./validation');
const Model = require('./model');
const createValidationMiddleWares = require('../../Common/middlwares');

const Middlewares = createValidationMiddleWares(dairatSchema, dairatUpdateSchema);


module.exports = {
  ...Middlewares,
  findDairat: ({ wilaya, params: { daira } }, res, next) => {
    const thedairat = wilaya.dairats.find(d => d == daira); // eslint-disable-line 
    if (!thedairat) {
      const err = new Error(`dairat ${daira} not found`);
      err.status = 404;
      throw err;
    }
    return next();
  },

  findDairatAndSave: async (req, res, next) => {
    try {
      const { params: { daira } } = req;
      const thedaira = await Model.findById(daira);
      req.daira = thedaira;
      next();
    } catch (error) {
      next(error);
    }
  },

};

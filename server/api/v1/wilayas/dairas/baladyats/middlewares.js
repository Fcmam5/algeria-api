const { baladyatSchema, baladyatUpdateSchema } = require('./validations');
const createValidationMiddleWares = require('../../../Common/middlwares');

const Middlewares = createValidationMiddleWares(baladyatSchema, baladyatUpdateSchema);

module.exports = {
  ...Middlewares,
  findBaladya: ({ daira, params: { baladya } }, res, next) => {
    const thebaladya = daira.baladyiats.find(d => d == baladya); // eslint-disable-line 
    if (!thebaladya) {
      const err = new Error(`baladyat ${baladya} not found`);
      err.status = 404;
      throw err;
    }
    return next();
  },

};

const { wilayaSchema, wilayaUpdateSchema } = require('./validation');
const createValidationMiddleWares = require('../Common/middlwares');

const Middlewares = createValidationMiddleWares(wilayaSchema, wilayaUpdateSchema);


module.exports = Middlewares;

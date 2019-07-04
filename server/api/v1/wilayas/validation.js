const joi = require('@hapi/joi');

exports.wilayaSchema = joi.object().keys({
  _id: joi.number().integer().min(1).max(48)
    .required(),
  name: joi.string().alphanum().required(),
  nameEr: joi.string().alphanum().required(),
  nameAr: joi.string().alphanum().required(),
  phoneCodes: joi.array().items(joi.string()),
  // TOFIND min max postal code of algeria
  postalCodes: joi.array().items(joi.number().min(0).max(99999)),
});

exports.wilayaUpdateSchema = joi.object().keys({
  _id: joi.number().integer().min(1).max(48),
  name: joi.string().alphanum(),
  nameEr: joi.string().alphanum(),
  nameAr: joi.string().alphanum(),
  phoneCodes: joi.array().items(joi.string()),
  // TOFIND min max postal code of algeria
  postalCodes: joi.array().items(joi.number().min(0).max(99999)),
});

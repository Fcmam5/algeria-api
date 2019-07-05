const joi = require('@hapi/joi');

exports.dairatSchema = joi.object().keys({
  code: joi.number().required(),
  name: joi.string().alphanum().required(),
  nameEr: joi.string().alphanum().required(),
  nameAr: joi.string().alphanum().required(),
  baladyiats: joi.array().items(joi.string()),
});

exports.dairatUpdateSchema = joi.object().keys({
  code: joi.number(),
  name: joi.string().alphanum(),
  nameEr: joi.string().alphanum(),
  nameAr: joi.string().alphanum(),
  baladyiats: joi.array().items(joi.string()),
});

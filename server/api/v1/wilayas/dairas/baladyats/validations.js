const joi = require('@hapi/joi');

exports.baladyatSchema = joi.object().keys({
  code: joi.number().required(),
  name: joi.string().alphanum().required(),
  nameEr: joi.string().alphanum().required(),
  nameAr: joi.string().alphanum().required(),
});

exports.baladyatUpdateSchema = joi.object().keys({
  code: joi.number(),
  name: joi.string().alphanum(),
  nameEr: joi.string().alphanum(),
  nameAr: joi.string().alphanum(),
});

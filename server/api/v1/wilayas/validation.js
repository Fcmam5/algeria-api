const joi = require('@hapi/joi');

exports.wilayaSchema = joi.object().keys({
  matricule: joi.number().integer().min(1).max(48)
    .required(),
  name: joi.string().required(),
  nameEn: joi.string().required(),
  nameAr: joi.string().required(),
  phoneCodes: joi.array().items(joi.number().min(0)),
  adjacentWilayas: joi.array().items(joi.number().min(1).max(48)),
  // TOFIND min max postal code of algeria
  postalCodes: joi.array().items(joi.object().keys(
    {
      ets: joi.string().required(),
      code: joi.number().min(0).required(),
    },
  )),
});

exports.wilayaUpdateSchema = joi.object().keys({
  matricule: joi.number().integer().min(1).max(48),
  name: joi.string().alphanum(),
  nameEn: joi.string().alphanum(),
  nameAr: joi.string().alphanum(),
  phoneCodes: joi.array().items(joi.number().min(0)),
  adjacentWilayas: joi.array().items(joi.string()),
  // TOFIND min max postal code of algeria
  postalCodes: joi.array().items(joi.object().keys(
    {
      ets: joi.string().required(),
      code: joi.number().min(0).required(),
    },
  )),
});

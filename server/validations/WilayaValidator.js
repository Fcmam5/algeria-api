const Joi = require('@hapi/joi');

const wilayaMatriculeSchema = Joi.number()
  .min(1)
  .max(48);
const phoneCodeSchema = Joi.number()
  .min(1)
  .required();

const WilayaValidator = {
  isInWilayasRange: matricule => wilayaMatriculeSchema.validate(matricule),
  isValidPhoneCode: code => phoneCodeSchema.validate(code),
};

module.exports = WilayaValidator;

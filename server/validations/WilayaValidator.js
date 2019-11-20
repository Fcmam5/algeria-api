
const Joi = require('@hapi/joi');

const wilayaMatriculeSchema = Joi.number().min(1).max(48);

const WilayaValidator = {
  isInWilayasRange: matricule => wilayaMatriculeSchema.validate(matricule),
};

module.exports = WilayaValidator;

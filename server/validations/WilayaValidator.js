
const joi = require('joi');

const createWilayaSchema = {
  mattricule: joi.number().min(1).max(48),
  name: joi.string().required(),
  nameAr: joi.string().required(),
  nameEn: joi.string().required(),
  phoneCodes: joi.array().items(joi.number()),
  postalCodes: joi.array().items(joi.number()),
  dairats: [{
    code: joi.number().required(),
    name: joi.string().required(),
    nameAr: joi.string().required(),
    nameEn: joi.string().required(),
    baladyiats: [{
      code: joi.number().required(),
      name: joi.string().required(),
      nameAr: joi.string().required(),
      nameEn: joi.string().required(),
    }],
  }],
  adjacentWilayas: joi.array().items(joi.number().min(1).max(48)),
};


const WilayaValidator = {
  create: joi.object().keys(createWilayaSchema).required(),
};

module.exports = WilayaValidator;

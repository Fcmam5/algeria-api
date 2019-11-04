
const Joi = require('joi');

// const createWilayaSchema = {
//   mattricule: Joi.number().min(1).max(48),
//   name: Joi.string().required(),
//   nameAr: Joi.string().required(),
//   nameEn: Joi.string().required(),
//   phoneCodes: Joi.array().items(Joi.number()),
//   postalCodes: Joi.array().items(Joi.number()),
//   dairats: [{
//     code: Joi.number().required(),
//     name: Joi.string().required(),
//     nameAr: Joi.string().required(),
//     nameEn: Joi.string().required(),
//     baladyiats: [{
//       code: Joi.number().required(),
//       name: Joi.string().required(),
//       nameAr: Joi.string().required(),
//       nameEn: Joi.string().required(),
//     }],
//   }],
//   adjacentWilayas: Joi.array().items(Joi.number().min(1).max(48)),
// };

const wilayaMatriculeSchema = Joi.number().min(1).max(48);

const WilayaValidator = {
  // create: Joi.object().keys(createWilayaSchema).required(),
  isInWilayasRange: matricule => Joi.validate(matricule, wilayaMatriculeSchema),
};

module.exports = WilayaValidator;

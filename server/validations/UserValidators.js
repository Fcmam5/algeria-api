const Joi = require('@hapi/joi');

const schemas = {
  loginRequestSchema: Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string().required(),
  }).required(),

  signupRequestSchema: Joi.object({
    name: Joi.string(),
    password: Joi.string()
      .min(8)
      .required(),
    email: Joi.string()
      .email()
      .required(),
  }),
};

const UserValidators = {
  validateLoginCredentials: body => schemas.loginRequestSchema.validate(body),
  validateSignupBody: body =>
    schemas.signupRequestSchema.validate(body, {
      stripUnknown: true,
      abortEarly: false,
    }),
};

module.exports = UserValidators;

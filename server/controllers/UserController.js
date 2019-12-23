
const boom = require('@hapi/boom');
const service = require('../services/UserService');

const UserController = {
  register: async (req, res, next) => {
    const { name, email, password } = req.body;

    try {
      const user = await service.create(name, email, password);
      return res.status(201).json({ success: true, user });
    } catch (error) {
      switch (error.name) {
        case 'EmailIsTakenError':
          return next(boom.conflict(error.message));

        default:
          return next(boom.internal(error));
      }
    }
  },
  login: async (req, res, next) => {
    const { email, password } = req.body;

    try {
      const token = await service.getByAuthCredentials(email, password);

      return res.json({ success: true, token });
    } catch (error) {
      switch (error.name) {
        case 'BadLoginCredentials':
          return next(boom.unauthorized(error.message));

        default:
          return next(boom.internal(error));
      }
    }
  },
};

module.exports = UserController;

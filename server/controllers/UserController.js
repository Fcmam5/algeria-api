
const boom = require('@hapi/boom');
const service = require('../services/UserService');

const UserController = {
  register: async (req, res, next) => {
    const {
      name, email, password,
    } = req.body;

    try {
      const user = await service.create(name, email, password);
      return res.status(201).json({ success: true, user });
    } catch (error) {
      return next(boom.internal('Error! Couldn\'t create user'));
    }
  },
  login: async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const token = await service.getByAuthCredentials(email, password);
      return res.json({ success: true, token });
    } catch (error) {
      return next(boom.unauthorized('Cannot login with the provided credentials!'));
    }
  },
};

module.exports = UserController;

/* eslint-disable no-underscore-dangle */
const User = require('../models/User');
const { createJWToken } = require('../config/auth');
const logger = require('../config/logger');
const { EmailIsTakenError, BadLoginCredentials } = require('./Errors');

const isEmailTaken = async email => Boolean(await User.findOne({ email }));

const UserService = {
  create: async (name, email, password) => {
    if (await isEmailTaken(email)) {
      throw new EmailIsTakenError();
    }

    try {
      const user = new User({ name, email, password });
      const savedUser = (await user.save()).toObject();

      // return only public attributes
      delete savedUser._id;
      delete savedUser.password;
      delete savedUser.createdAt;
      delete savedUser.updatedAt;
      delete savedUser.__v;

      return savedUser;
    } catch (error) {
      logger.error(error);
      throw error;
    }
  },
  getByAuthCredentials: async (email, password) => {
    const user = await User.findOne({ email });

    if (user) {
      const isMatch = await user.comparePassword(password);

      if (isMatch) {
        return createJWToken({
          sessionData: { email: user.email, id: user._id },
          maxAge: 3600,
        });

      }
    }

    throw new BadLoginCredentials();
  },
};

module.exports = UserService;

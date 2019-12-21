const User = require('../models/User');
const { createJWToken } = require('../config/auth');

const UserService = {
  create: async (name, email, password) => {
    const user = new User(name, email, password);
    return user.save();
  },
  getByAuthCredentials: async (email, password) => {
    const user = await User.findOne({ email });

    if (user) {
      const isMatch = await user.comparePassword(password);
      if (isMatch) {
        const jwtToken = await createJWToken({
          sessionData: user,
          maxAge: 3600,
        });

        return jwtToken;
      }
    }

    throw new Error('Cannot login with the provided credentials');
  },
};

module.exports = UserService;

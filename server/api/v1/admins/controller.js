const { hasAccess } = require('../../../services/acl/middlewares');
const { ADMINS, SHOW_SELF } = require('../../../services/acl/constants');
const { sign } = require('../../../services/auth');
const Admin = require('./model');

exports.showMe = [
  hasAccess(ADMINS, SHOW_SELF),
  ({ user }, res) => res.json({ user }),
];


exports.login = [
  async ({ body: { email, password } }, res, next) => {
    try {
      const admin = await Admin.findOne({ email, password });
      if (admin) {
        const token = await sign({ role: 0, id: admin.id });
        return res.json({ token });
      }
      throw new Error();
    } catch (err) {
      err.name = 'InvalidCredentials';
      err.message = 'Invalid credentials';
      err.status = 401;
      return next(err);
    }
  },
];

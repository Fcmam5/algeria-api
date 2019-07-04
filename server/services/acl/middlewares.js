const Auth = require('../auth');
const { can } = require('.');
const Admin = require('../../api/v1/admins/model');

const hasAccess = (module, method) => async (req, res, next) => {
  try {
    const { headers: { authorization: token } } = req;
    const { role, id } = await Auth.verify(token);
    const access = can(role, module, method);
    if (access) {
      const admin = await Admin.findOne({ _id: id, role });
      if (admin) {
        req.user = admin;
        return next();
      }
    }
    throw new Error();
  } catch (err) {
    err.status = 401;
    err.message = 'permission denied';
    return next(err);
  }
};

module.exports = { hasAccess };

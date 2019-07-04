const {
 adminRole, allMethods, WILAYAS, ADMINS 
} = require('./constants');

const rolesMap = new Map();

exports.can = (role, module, method) => {
  const access = rolesMap.get(role);
  if (!access) return false;
  const moduleAccess = access.find(m => m.module === module);
  if (!moduleAccess) return false;
  if (!method) return true;
  const methodAccess = moduleAccess.methods.find(m => m === method);
  return !!methodAccess;
};

rolesMap.set(adminRole, [
  {
    module: WILAYAS,
    methods: allMethods,
  },
  {
    module: ADMINS,
    methods: allMethods,
  },
]);

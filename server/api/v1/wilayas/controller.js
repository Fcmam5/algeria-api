const querymen = require('querymen');
const { hasAccess } = require('../../../services/acl/middlewares');
const {
  WILAYAS, CREATE, DELETE, UPDATE,
} = require('../../../services/acl/constants');
const { validateBody, validateUpdateOp } = require('./middlewares');
const Model = require('./model');

const wilayaController = {
  list: [
    querymen.middleware(), // docs at: https://www.npmjs.com/package/querymen
    async ({ querymen: { select, cursor } }, res, next) => {
      try {
        const docs = await Model.find({}, select, cursor);
        res.json(docs);
      } catch (err) {
        next(err);
      }
    },
  ],
  show: ({ params: { matricule } }, res, next) => Model.findById(matricule).then(
    (wilaya) => {
      if (wilaya) {
        return res.json(wilaya);
      }
      const err = new Error(`wilaya ${matricule} not found`);
      err.status = 404;
      return next(err);
    },
  ),
  create: [
    hasAccess(WILAYAS, CREATE),
    validateBody,
    async ({ body }, res, next) => {
      try {
        const wilaya = await new Model(body).save();
        res.json(wilaya);
      } catch (error) {
        next(error);
      }
    },
  ],
  update: [
    hasAccess(WILAYAS, UPDATE),
    validateUpdateOp,
    async ({ body, params: { matricule } }, res, next) => {
      try {
        const result = await Model.updateOne({ _id: matricule }, body);
        if (result.ok && result.n) {
          return res.json({ msg: 'update successful', success: true });
        }
        throw new Error();
      } catch (error) {
        error.status = 404;
        error.message = `wilaya ${matricule} not found`;
        return next(error);
      }
    },
  ],
  destroy: [
    hasAccess(WILAYAS, DELETE),
    validateUpdateOp,
    async ({ params: { matricule } }, res, next) => {
      try {
        const result = await Model.deleteOne({ _id: matricule });
        if (result.ok && result.n) {
          return res.json({ msg: 'delete successful', success: true });
        }
        throw new Error();
      } catch (error) {
        error.status = 404;
        error.message = `wilaya ${matricule} not found`;
        return next(error);
      }
    },
  ],
};

module.exports = wilayaController;

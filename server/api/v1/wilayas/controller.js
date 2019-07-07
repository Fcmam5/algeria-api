const querymen = require('querymen');
const { hasAccess } = require('../../../services/acl/middlewares');
const {
  WILAYAS, CREATE, DELETE, UPDATE,
} = require('../../../services/acl/constants');
const { validateBody, validateUpdateOp } = require('./middlewares');
const Model = require('./model');

const wilayaController = {
  list: [
    querymen.middleware(), // support field selection and pagination
    async ({ querymen: { select, cursor } }, res, next) => {
      try {
        const data = await Model.find({}, select, cursor);
        const count = await Model.count({});
        res.json({ data, count });
      } catch (err) {
        next(err);
      }
    },
  ],
  show: ({ params: { matricule } }, res, next) => Model.findOne({ matricule }).then(
    (wilaya) => {
      if (wilaya) {
        return res.json(wilaya);
      }
      const err = new Error(`wilaya ${matricule} not found`);
      err.status = 404;
      return next(err);
    },
  ),
  adjacents: async ({ params: { matricule } }, res, next) => {
    try {
      const wilaya = await Model.findOne({ matricule });
      if (wilaya) {
        await wilaya.populate('adjacentWilayas').execPopulate();
        return res.json({ data: wilaya.adjacentWilayas });
      }
      throw new Error();
    } catch (error) {
      const err = new Error(`wilaya ${matricule} not found`);
      err.status = 404;
      return next(err);
    }
  },
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
        const result = await Model.updateOne({ matricule }, body);
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
    async ({ params: { matricule } }, res, next) => {
      try {
        const result = await Model.deleteOne({ matricule });
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
  findWilaya: async (req, res, next) => {
    try {
      const { params: { matricule } } = req;
      const wilaya = await Model.findOne({ matricule });
      if (wilaya) {
        req.wilaya = wilaya;
        return next();
      }
      const err = new Error(`wilaya ${matricule} not found`);
      err.status = 404;
      throw err;
    } catch (err) {
      return next(err);
    }
  },
};

module.exports = wilayaController;

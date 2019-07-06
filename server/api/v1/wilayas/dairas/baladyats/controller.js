const { hasAccess } = require('../../../../../services/acl/middlewares');
const {
  BALADYIATS, CREATE, DELETE, UPDATE,
} = require('../../../../../services/acl/constants');
const { validateBody, validateUpdateOp, findBaladya } = require('./middlewares');
const Model = require('./model');

exports.list = [
  async ({ daira }, res, next) => {
    try {
      await daira.populate('baladyiats').execPopulate();
      res.json({ data: daira.baladyiats });
    } catch (error) {
      next(error);
    }
  },
];

exports.show = [
  findBaladya,
  async ({ params: { baladya } }, res, next) => {
    try {
      const theBaladya = await Model.findById(baladya);
      res.json(theBaladya);
    } catch (error) {
      next(error);
    }
  },
];

exports.create = [
  hasAccess(BALADYIATS, CREATE),
  validateBody,
  async ({ body, daira }, res, next) => {
    try {
      const baladya = await new Model(body).save();
      daira.baladyiats.push(baladya.id);
      await daira.save();
      res.json(baladya);
    } catch (error) {
      next(error);
    }
  },
];

exports.update = [
  hasAccess(BALADYIATS, UPDATE),
  findBaladya,
  validateUpdateOp,
  async ({ body, params: { baladya } }, res, next) => {
    try {
      const result = await Model.updateOne({ _id: baladya }, body);
      if (result.ok && result.n) {
        return res.json({ msg: 'update successful', success: true });
      }
      throw new Error();
    } catch (error) {
      error.status = 404;
      error.message = `baladyat ${baladya} not found`;
      return next(error);
    }
  },
];

exports.destroy = [
  hasAccess(BALADYIATS, DELETE),
  findBaladya,
  async ({ params: { baladya }, daira }, res, next) => {
    try {
      const result = await Model.deleteOne({ _id: baladya });
      if (result.ok && result.n) {
        const index = daira.baladyiats.indexOf(baladya);
        daira.baladyiats.splice(index, 1);
        await daira.save();
        return res.json({ msg: 'delete successful', success: true });
      }
      throw new Error();
    } catch (error) {
      error.status = 404;
      error.message = `baladyat ${daira} not found`;
      return next(error);
    }
  },
];

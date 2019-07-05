const { hasAccess } = require('../../../../services/acl/middlewares');
const {
  WILAYAS, CREATE, DELETE, UPDATE,
} = require('../../../../services/acl/constants');
const { validateBody, validateUpdateOp, findDairat } = require('./middlewares');
const Model = require('./model');

exports.list = [
  async ({ wilaya }, res, next) => {
    try {
      await wilaya.populate('dairats').execPopulate();
      res.json({ data: wilaya.dairats });
    } catch (error) {
      next(error);
    }
  },
];

exports.show = [
  findDairat,
  async ({ params: { daira } }, res, next) => {
    try {
      const thedaira = await Model.findById(daira);
      res.json(thedaira);
    } catch (error) {
      next(error);
    }
  },
];

exports.create = [
  hasAccess(WILAYAS, CREATE),
  validateBody,
  async ({ body, wilaya }, res, next) => {
    try {
      const daira = await new Model(body).save();
      wilaya.dairats.push(daira.id);
      await wilaya.save();
      res.json(daira);
    } catch (error) {
      next(error);
    }
  },
];

exports.update = [
  hasAccess(WILAYAS, UPDATE),
  findDairat,
  validateUpdateOp,
  async ({ body, params: { daira } }, res, next) => {
    try {
      const result = await Model.updateOne({ _id: daira }, body);
      if (result.ok && result.n) {
        return res.json({ msg: 'update successful', success: true });
      }
      throw new Error();
    } catch (error) {
      error.status = 404;
      error.message = `dairat ${daira} not found`;
      return next(error);
    }
  },
];

exports.destroy = [
  hasAccess(WILAYAS, DELETE),
  findDairat,
  async ({ params: { daira }, wilaya }, res, next) => {
    try {
      const result = await Model.deleteOne({ _id: daira });
      if (result.ok && result.n) {
        const index = wilaya.dairats.indexOf(daira);
        wilaya.dairats.splice(index, 1);
        await wilaya.save();
        return res.json({ msg: 'delete successful', success: true });
      }
      throw new Error();
    } catch (error) {
      error.status = 404;
      error.message = `dairat ${daira} not found`;
      return next(error);
    }
  },
];

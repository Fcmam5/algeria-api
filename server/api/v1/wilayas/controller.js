// TODO: Replace file by DB when all fields are filled
const WilayaList = require('../../../../results/WilayaList.json');
const { getWilayasNames } = require('../../../utils');
const { hasAccess } = require('../../../services/acl/middlewares');
const {
  WILAYAS, CREATE, DELETE, UPDATE,
} = require('../../../services/acl/constants');
const { validateBody, validateUpdateOp } = require('./middlewares');
const Model = require('./model');

const wilayaController = {
  list: (req, res) => res.status(200).json({ data: WilayaList }),
  wilayaByMatricule: (req, res) => {
    const matricule = Number(req.params.matricule);
    const theWilaya = WilayaList[matricule - 1];
    return res.status(200).json({ data: theWilaya });
  },
  adjacentWilayas: (req, res) => {
    const matricule = Number(req.params.matricule);
    const { adjacentWilayas } = WilayaList[matricule - 1];
    return res.status(200).json({ data: adjacentWilayas });
  },
  adjacentWilayasNames: (req, res) => {
    const matricule = Number(req.params.matricule);
    const { lang } = req.params;
    const { adjacentWilayas } = WilayaList[matricule - 1];
    const adjacentWilayasWithNames = getWilayasNames(adjacentWilayas, lang);
    return res.status(200).json({
      data: {
        names: adjacentWilayasWithNames,
        mattricules: adjacentWilayas,
      },
    });
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
        const result = await Model.updateOne({ _id: matricule }, body);
        if (result.ok && result.n) {
          return res.json({ msg: 'update successful', success: true });
        }
        throw new Error();
      } catch (error) {
        error.status = 404;
        error.message = `wilaya ${matricule} not found`;
        next(error);
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
        next(error);
      }
    },
  ],
};

module.exports = wilayaController;

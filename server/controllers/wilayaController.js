const boom = require('@hapi/boom');
const service = require('../services/wilayaService');
const presenter = require('./responsePresenter');

const wilayaController = {
  list: async (req, res, next) => {
    const resFormat = req.query.format;
    try {
      const wilayas = await service.getList();
      return presenter.presentResponse(res, wilayas, resFormat, 'wilayas', 200);
    } catch (error) {
      return next(boom.internal('Error'));
    }
  },
  wilayaByMatricule: async (req, res, next) => {
    const resFormat = req.query.format;
    const mattricule = Number(req.params.matricule);

    try {
      const theWilaya = await service.getWilaya(mattricule);
      return presenter.presentResponse(res, theWilaya, resFormat, 'wilayas', 200);
    } catch (error) {
      return next(boom.internal('Error'));
    }
  },
  adjacentWilayas: async (req, res, next) => {
    const resFormat = req.query.format;
    const mattricule = Number(req.params.matricule);
    try {
      const adjacentWilayas = await service.getAdjacentWilayas(mattricule);
      return presenter.presentArrayResponse(res, adjacentWilayas, resFormat, 'wilayas');
    } catch (error) {
      return next(boom.internal('Error'));
    }
  },
  adjacentWilayasNames: async (req, res, next) => {
    const resFormat = req.query.format;
    const mattricule = Number(req.params.matricule);
    const { lang } = req.params;

    try {
      const {
        adjacentWilayasWithNames,
      } = await service.getAdjacentWilayasNames(mattricule, lang);

      return presenter
        .presentArrayResponse(res, adjacentWilayasWithNames, resFormat, 'wilayas', 200);
    } catch (error) {
      return next(boom.internal('Error'));
    }
  },
  wilayaByPhoneCode: async (req, res, next) => {
    const resFormat = req.query.format;
    const { code } = req.query;

    try {
      const theWilaya = await service.getWilayaByPhoneCode(code);

      if (!theWilaya) {
        throw next(boom.notFound(`There is no wilaya with the phone code "${code}"`));
      }

      return presenter.presentResponse(res, theWilaya, resFormat, 'wilaya', 200);
    } catch (error) {
      return next(boom.internal('Error'));
    }
  },
};

module.exports = wilayaController;

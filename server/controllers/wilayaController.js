const xmlify = require('xmlify');
const boom = require('@hapi/boom');
const service = require('../services/wilayaService');

// TODO Validate parameters using Joi
const wilayaController = {
  list: async (req, res, next) => {
    const resFormat = req.query.format || 'json';
    try {
      const wilayas = await service.getList();

      switch (resFormat) {
        case 'xml':
          res.type('application/xml');
          return res.send(xmlify(wilayas, 'wilayas'));

        default:
          return res.status(200).json({ data: wilayas });
      }
    } catch (error) {
      return next(boom.internal('Error'));
    }
  },
  wilayaByMatricule: async (req, res, next) => {
    const resFormat = req.query.format || 'json';
    const mattricule = Number(req.params.matricule);

    try {
      const theWilaya = await service.getWilaya(mattricule);

      switch (resFormat) {
        case 'xml':
          res.type('application/xml');
          return res.send(xmlify(theWilaya, 'wilaya'));
        default:
          return res.status(200).json({ data: theWilaya });
      }
    } catch (error) {
      return next(boom.internal('Error'));
    }
  },
  adjacentWilayas: async (req, res, next) => {
    const resFormat = req.query.format || 'json';
    const mattricule = Number(req.params.matricule);
    try {
      const adjacentWilayas = await service.getAdjacentWilayas(mattricule);

      switch (resFormat) {
        case 'xml':
          // eslint-disable-next-line no-case-declarations
          const xmlResponse = xmlify(Array.from(adjacentWilayas), { root: 'wilayas' });
          res.type('application/xml');
          return res.send(xmlResponse);
        default:
          return res.status(200).json({ data: adjacentWilayas });
      }
    } catch (error) {
      return next(boom.internal('Error'));
    }
  },
  adjacentWilayasNames: async (req, res, next) => {
    const resFormat = req.query.format || 'json';
    const mattricule = Number(req.params.matricule);
    const { lang } = req.params;

    try {
      const {
        adjacentWilayas,
        adjacentWilayasWithNames,
      } = await service.getAdjacentWilayasNames(mattricule, lang);

      switch (resFormat) {
        case 'xml':
          // eslint-disable-next-line no-case-declarations
          const xmlResponse = xmlify({ wilayas: Array.from(adjacentWilayasWithNames) }, { root: 'wilayas' });
          res.type('application/xml');
          return res.send(xmlResponse);
        default:
          return res.status(200).json({
            data: {
              names: adjacentWilayasWithNames,
              mattricules: adjacentWilayas,
            },
          });
      }
    } catch (error) {
      return next(boom.internal('Error'));
    }
  },
  wilayaByPhoneCode: async (req, res, next) => {
    const resFormat = req.query.format || 'json';
    const { code } = req.query;

    try {
      const theWilaya = await service.getWilayaByPhoneCode(code);

      if (!theWilaya) {
        throw next(boom.notFound(`There is no wilaya with the phone code "${code}"`));
      }

      switch (resFormat) {
        case 'xml':
          res.type('application/xml');
          return res.send(xmlify(theWilaya, 'wilaya'));
        default:
          return res.status(200).json({ data: theWilaya });
      }
    } catch (error) {
      return next(boom.internal('Error'));
    }
  },
};

module.exports = wilayaController;

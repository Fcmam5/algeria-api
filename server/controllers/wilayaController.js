// TODO: Replace file by DB when all fields are filled
const WilayaList = require('../../results/WilayaList.json');
const { getWilayasNames } = require('../utils');

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
};

module.exports = wilayaController;

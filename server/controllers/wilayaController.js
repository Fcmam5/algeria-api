// TODO: Replace file by DB when all fields are filled
const WilayaList = require('../../results/WilayaList.json');

const wilayaController = {
  list: (req, res) => res.status(200).json({ data: WilayaList }),
  wilayaByMatricule: (req, res) => {
    const matricule = Number(req.params.matricule);
    const theWilaya = WilayaList[matricule - 1];
    return res.status(200).json({ data: theWilaya });
  },
};

module.exports = wilayaController;

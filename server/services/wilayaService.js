const { Wilaya } = require('../models/index');
const { getWilayasNames } = require('../utils');

const WilayaService = {
  getList: async () => Wilaya.find({}, {
    _id: 0, __v: 0, 'dairats._id': 0, 'dairats.baladyiats._id': 0,
  }).exec(),
  getWilaya: async mattricule => Wilaya.findOne({ mattricule }, {
    _id: 0, 'dairats._id': 0, 'dairats.baladyiats._id': 0, __v: 0,
  }).exec(),
  getAdjacentWilayas: async (mattricule) => {
    const { adjacentWilayas } = await Wilaya.findOne({ mattricule }).exec();
    return adjacentWilayas;
  },
  getAdjacentWilayasNames: async (mattricule, lang) => {
    const theWilaya = await Wilaya.findOne({ mattricule }).exec();
    const { adjacentWilayas } = theWilaya;
    const adjacentWilayasWithNames = getWilayasNames(adjacentWilayas, lang);
    return { adjacentWilayas, adjacentWilayasWithNames };
  },
};

module.exports = WilayaService;

const { Wilaya } = require('../models');
const WilayaList = require('../../results/WilayaList');
const logger = require('../config/logger');

async function showCollections(connection) {
  logger.info('|-- Show collections');
  const names = await connection.db.listCollections().toArray();
  logger.info(
    `|-- ${names.length} collections found (${names.map(n => n.name)})`
  );
}

function eraseData(connection, name) {
  logger.info(`|-- Dropping "${name}" collection`);
  return connection.db.dropCollection(name);
}

async function insertData() {
  const wilayasToInset = [];

  WilayaList.forEach(async w => {
    // Construct dairats
    const dairats = w.dairats.map(d => ({
      code: d.code,
      name: d.name,
      nameAr: d.name_ar,
      nameEn: d.name_en,
      baladyiats: (d.baladyiats || []).map(b => ({
        code: b.code,
        name: b.name,
        nameAr: b.name_ar,
        nameEn: b.name_en,
      })),
    }));

    const wilaya = new Wilaya({
      mattricule: w.mattricule,
      name: w.name,
      nameAr: w.name_ar,
      nameEn: w.name_en,
      phoneCodes: w.phoneCodes,
      postalCodes: w.postalCodes,
      dairats,
      adjacentWilayas: w.adjacentWilayas,
    });

    wilayasToInset.push(wilaya);
  });

  return Wilaya.insertMany(wilayasToInset);
}

module.exports = {
  showCollections,
  eraseData,
  insertData,
};

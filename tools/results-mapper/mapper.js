const fs = require('fs');

/**
 * Map results from crawlers to result files and dbs
 */

// Models
const { Wilaya, Daira, Baladyia } = require('./models');
// Inputs
const dairasPerWilayaFile = require('../crawlers/dairas-crawler/dairasPerWilaya.json');
// Get Wilaya list from AlgerianAdministrativeDivision repository (https://github.com/mohsenuss91/AlgerianAdministrativeDivision)
const AlgerianAdministrativeDivision = require('./Algeria');
const postalCodesFile = require('../crawlers/postal-codes-crawler/cleaned-response.json');

const WilayasList = AlgerianAdministrativeDivision.Algeria.Algeria.Wilayas.Wilaya;
const dairasPerWilaya = Object.keys(dairasPerWilayaFile).map(d => dairasPerWilayaFile[d]);
const postalCodes = Object.keys(postalCodesFile).map(pc => postalCodesFile[pc]);

const result = WilayasList.reduce((acc, w, index) => {
  const dairatsForWilaya = dairasPerWilaya[index];
  const postalCodeArray = postalCodes[index].map(pc => pc.code).filter(pc => pc > 0);
  const baladyiats = []; // TODO Read Baladyiats
  const dairats = dairatsForWilaya.map(d => new Daira(d.daira, d.daira, null, baladyiats));
  const phoneCodes = !Array.isArray(w.phoneCode) ? [Number(w.phoneCode)] : w.phoneCode.map(pc => Number(pc));
  const wilaya = new Wilaya(index + 1, w.french, w.arabic, null, phoneCodes, postalCodeArray, dairats);
  acc.push(wilaya);
  return acc;
}, []);

// Result
fs.writeFileSync(`${__dirname}/result.json`, JSON.stringify(result));

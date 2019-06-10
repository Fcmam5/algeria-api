const fs = require('fs');

/**
 * Map results from crawlers to result files and dbs
 */

// Models
const { Wilaya, Daira, Baladyia } = require('./models');
// Inputs
const dairasPerWilayaFile = require('../crawlers/dairas-crawler/results/dairasPerWilaya.json');
const dairasPerWilayaArabicFile = require('../crawlers/dairas-crawler/results/dairasPerWilayaArabic.json');
// Get Wilaya list from AlgerianAdministrativeDivision repository (https://github.com/mohsenuss91/AlgerianAdministrativeDivision)
let AlgerianAdministrativeDivision = require('./Algeria.json');
const postalCodesFile = require('../crawlers/postal-codes-crawler/cleaned-response.json');
// Get Adjacent wilayas result
const adjacentWilayasFile = require('../construct-adjacent-wilayas/result.json');

const WilayasList = require('./WilayaList');

AlgerianAdministrativeDivision = AlgerianAdministrativeDivision.Algeria.Wilayas.Wilaya;


const dairasPerWilaya = Object.keys(dairasPerWilayaFile).map(d => dairasPerWilayaFile[d]);
const dairasPerWilayaArabic = Object.keys(dairasPerWilayaArabicFile).map(d => dairasPerWilayaArabicFile[d]);
const postalCodes = Object.keys(postalCodesFile).map(pc => postalCodesFile[pc]);

const result = WilayasList.reduce((acc, w, index) => {
  const dairatsForWilaya = dairasPerWilaya[index].sort((a, b) => a.code - b.code);
  const dairatsForWilayaArabic = dairasPerWilayaArabic[index].sort((a, b) => a.code - b.code);
  const postalCodeArray = postalCodes[index].map(pc => pc.code).filter(pc => pc > 0);
  const baladyiats = []; // TODO Read Baladyiats
  const dairats = dairatsForWilaya.map((d, i) => new Daira(Number(d.code), d.daira, dairatsForWilayaArabic[i].daira, null, baladyiats));
  const phoneCodes = !Array.isArray(AlgerianAdministrativeDivision[index].phoneCode) ? [Number(AlgerianAdministrativeDivision[index].phoneCode)] : AlgerianAdministrativeDivision[index].phoneCode.map(pc => Number(pc));
  const { adjacentWilayas } = adjacentWilayasFile[index];
  // Result object
  const wilaya = new Wilaya(index + 1, w.name, w.ar_name, w.name, phoneCodes, postalCodeArray, dairats, adjacentWilayas);
  acc.push(wilaya);
  return acc;
}, []);

// Result
fs.writeFileSync(`${__dirname}/result.json`, JSON.stringify(result));

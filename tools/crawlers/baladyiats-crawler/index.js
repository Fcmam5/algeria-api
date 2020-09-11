/* eslint-disable no-plusplus */
/**
 * TODO:
 *  - For each wilaya:
 *    - Loop over each dayra:
 *        - For each dayra get:
 *            - Arabic name
 *            - French name
 */

const fs = require('fs');
const rp = require('request-promise');
const { keyBy, merge, values } = require('lodash');
const $ = require('cheerio');
const WilayaList = require('./data/result.json');

const baladyiahUrlFR = daira => `http://www.interieur.gov.dz/index.php/fr/component/annuaire/?view=daira&code_d=${daira}`;
const baladyiahUrlAR = daira => `http://www.interieur.gov.dz/index.php/ar/component/annuaire/?view=daira_ar&code_d=${daira}`;

async function getBaladyats(dairaCode) {
  const html = await rp(baladyiahUrlFR(dairaCode));
  const rs = $('#content table.table tbody tr:not(:first-child)', html).map((i, elm) => ({
    code: $(elm).find('td:nth-of-type(1)').text().trim(),
    name: $(elm).find('td:nth-of-type(2)').text().trim(),
    name_en: $(elm).find('td:nth-of-type(2)').text().trim(),
  })).get();
  return rs;
}

async function getBaladyatsArabic(dairaCode) {
  const html = await rp(baladyiahUrlAR(dairaCode));
  const rs = $('#content table.table tbody tr:not(:first-child)', html).map((i, elm) => ({
    code: $(elm).find('td:nth-of-type(1)').text().trim(),
    name_ar: $(elm).find('td:nth-of-type(2)').text().trim(),
  })).get();
  return rs;
}


async function getBaladyatsForDaira(daira) {
  let baladyatsList = [];
  let result = {};
  const baladiats = await getBaladyats(daira.code);
  const baladiatsArabic = await getBaladyatsArabic(daira.code);

  const mergedBaladyatsList = merge(keyBy(baladiats, 'code'), keyBy(baladiatsArabic, 'code'));
  baladyatsList = [...values(mergedBaladyatsList)];
  result = await {
    code: daira.code,
    name: daira.name,
    name_ar: daira.name_ar,
    name_en: daira.name_en,
  };

  if (baladyatsList.length) {
    result.baladyiats = baladyatsList;
  }

  return result;
}

async function getBaladyatsForWilaya(wilaya) {
  const { dairats } = wilaya;
  const baladyatsListPromises = dairats.map(d => getBaladyatsForDaira(d));
  return Promise.all(baladyatsListPromises);
}

(async function main() {
  // let i = 0;
  // const lazyLoop = setInterval(async () => {
  //   const result = await getBaladyatsForWilaya(WilayaList[i]);
  //   WilayaList[i].dairats = result;

  //   if (i >= WilayaList.length - 1) {
  //     clearInterval(lazyLoop);
  //     fs.writeFileSync(`${__dirname}/data/result.json`, JSON.stringify(WilayaList));
  //   }

  //   i++;
  // }, 3000);

  // Manually change parameters here, the server couldn't handle it :/
  const start = 43;
  const end = 47;

  for (let i = start; i <= end; i++) {
    const result = await getBaladyatsForWilaya(WilayaList[i]);
    WilayaList[i].dairats = result;
    fs.writeFileSync(`${__dirname}/data/result.json`, JSON.stringify(WilayaList));
  }
}());

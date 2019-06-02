const fs = require('fs');
const rp = require('request-promise');
const $ = require('cheerio');
const { WILAYAS } = require('./constants');

const dairasArabicUrl = wMat => `http://www.interieur.gov.dz/index.php/ar/component/annuaire/?view=wilaya_ar&code=${wMat}`;
// const baladyiahUrl = daira => `http://www.interieur.gov.dz/index.php/fr/component/annuaire/?view=daira&code_d=${daira}`;

async function getDairas(wilaya) {
  const html = await rp(dairasArabicUrl(wilaya));
  const rs = $('#content table.table.table-hover tbody tr:not(:first-child)', html).map((i, elm) => ({
    code: $(elm).find('td:nth-of-type(1)').text().trim(),
    daira: $(elm).find('td:nth-of-type(2)').text().trim(),
  })).get();
  return rs;
}

// async function getBaladyiahts(dairaCode) {
//   const html = await rp(baladyiahUrl(dairaCode));
//   const rs = $('#content table.table tbody tr:not(:first-child)', html)
//     .map((i, elm) => $(elm).find('td:nth-of-type(2)').text().trim()).get();
//   return rs;
// }
(async function main() {
  const result = {};
  const dayrasPromises = WILAYAS.map((wilaya, index) => getDairas(index + 1));


  Promise.all(dayrasPromises).then((wilayats) => {
    wilayats.forEach((wilaya, index) => {
      result[WILAYAS[index]] = wilaya;
    });

    fs.writeFileSync(`${__dirname}/results/dairasPerWilayaArabic.json`, JSON.stringify(result));
  });
}());

const fs = require('fs');
const rp = require('request-promise');
const $ = require('cheerio');

const rootUrl = 'https://www.poste.dz/customer/bureaux_postaux?wilaya=';

async function getWilayas(url) {
  const html = await rp(`${url}ORAN`);
  const wilayasFromSelector = $('[name="wilaya"]', html).text().trim();

  // Remove spaces and line-breaks and create an array
  const wilayas = wilayasFromSelector
    .replace(/\s{2,}/g, ',')
    .split(',');

  return wilayas;
}

async function getPostalCodes(wilaya) {
  const wilayaConcatenated = wilaya.split(' ').join('+');
  const html = await rp(`${rootUrl}${wilayaConcatenated}`);
  const rs = $('#data tbody tr', html).map((i, elm) => ({
    ets: $(elm).find('td:nth-of-type(1)').text().trim(),
    code: Number($(elm).find('td:nth-of-type(2)').text().trim()),
  })).get();

  const rsObject = {};
  rsObject[wilayaConcatenated] = rs;

  return JSON.stringify(rsObject);
}

// getPostalCodes('ORAN');
// console.log(getWilayas(rootUrl));

(async function main() {
  const resPromises = [];
  const wilayas = await getWilayas(rootUrl);

  wilayas.forEach((w) => {
    resPromises.push(getPostalCodes(w));
  });
  Promise.all(resPromises)
    .then(rs => fs.writeFileSync(`${__dirname}/response.json`, rs));
}());

/**
 * This file is used to sort/clean and map results,
 *    before moving the resulted file to the main results/ dir
 * The main WilayaList object was contructed, so we will use it from now :)
 * The code used for that is in tools/results-mapper/legacy/mapper.legacy.js
 */

const fs = require('fs');

// Sort baladyiats
const WilayaList = require('./result.json');

WilayaList.forEach((wilaya, wIndex) => {
  wilaya.dairats.forEach((daira, dIndex) => {
    if (daira.baladyiats && daira.baladyiats.length) {
      // daira.baladyiats
      const sortedBaladyats = daira.baladyiats
        .map(bld => ({ ...bld, code: Number(bld.code) }))
        .sort((a, b) => a.code - b.code);
      WilayaList[wIndex].dairats[dIndex].baladyiats = sortedBaladyats;
    }
  });
});

fs.writeFileSync(`${__dirname}/result.json`, JSON.stringify(WilayaList));

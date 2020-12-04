const dataset = require('../../data/WilayaList.json');
const namesDataset = require('./rs.json');

const newDataset = dataset.map((w, index) => {
  return {
    mattricule: w.mattricule,
    name_ar: w.name_ar,
    name_ber: namesDataset[index].name_ber,
    name_en: w.name_en,
    name: w.name,
    ...w,
  };
});

// Run with:
// ▶  node get-berber-names/merge-results.js > ../data/WilayaList-new.json
console.log(JSON.stringify(newDataset, null, 2));

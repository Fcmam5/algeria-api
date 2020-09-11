/* eslint-disable camelcase */
const WilayaList = require('../../data/WilayaList.json');
const { supportedLanguages } = require('./constants');

function isLanguageSupported(langCode) {
  if (langCode) {
    return supportedLanguages.has(langCode);
  }
  throw new Error(
    'Please provide a valid language code, example: isLanguageSupported("ar")'
  );
}

function getWilayasNames(matricules, langCode) {
  if (Array.isArray(matricules)) {
    if (matricules.length) {
      switch (langCode) {
        case 'ar':
          return matricules.map(mat => WilayaList[mat - 1].name_ar);
        case 'en':
          return matricules.map(mat => WilayaList[mat - 1].name_en);
        case 'fr':
          return matricules.map(mat => WilayaList[mat - 1].name);

        default:
          return matricules.map(mat => {
            const {
              name,
              mattricule,
              name_ar,
              name_en,
            } = WilayaList[mat - 1];
            return {
              mattricule,
              name,
              name_ar,
              name_en,
            };
          });
      }
    }
    return [];
  }
  throw Error('matricules is not an array!');
}

module.exports = {
  isLanguageSupported,
  getWilayasNames,
};

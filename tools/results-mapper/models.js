/**
 *  Wilaya (City) Model
 * @param {Number} mattricule
 * @param {String} name
 * @param {String} nameAr
 * @param {String} nameEn
 * @param {Array} phoneCodes
 * @param {Array} postalCodes
 * @param {Array} dairats (instance of Daira model)
 */
function WilayaModel(mattricule, name, nameAr, nameEn, phoneCodes, postalCodes, dairats) {
  this.mattricule = mattricule;
  this.name = name;
  this.name_ar = nameAr;
  this.name_en = nameEn || name;
  this.phoneCodes = phoneCodes;
  this.postalCodes = postalCodes;
  this.dairats = dairats;
}

/**
 *  Daira model is defined by name (Arabic, french and English) and a list of Baladyiats
 * @param {Number} code
 * @param {String} name
 * @param {String} nameAr
 * @param {String} nameEn
 * @param {Array} baladyiats (instance of Baladyia model)
 */
function DairaModel(code, name, nameAr, nameEn, baladyiats) {
  this.code = code;
  this.name = name;
  this.name_ar = nameAr;
  this.name_en = nameEn || name;
  this.baladyiats = baladyiats;
}

/**
 *  Baladyia is defined by name (Arabic, french and English)
 * @param {String} name
 * @param {String} nameAr
 */
function BaladyiaModel(name, nameAr, nameEn) {
  this.name = name;
  this.name_ar = nameAr;
  this.name_en = nameEn || name;
}


module.exports = {
  Wilaya: WilayaModel,
  Daira: DairaModel,
  Baladyia: BaladyiaModel,
};

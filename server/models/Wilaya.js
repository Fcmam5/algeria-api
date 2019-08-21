const mongoose = require('mongoose');

const { Schema } = mongoose;

const WilayaSchema = new Schema({
  mattricule: Number,
  name: String,
  nameAr: String,
  nameEn: String,
  phoneCodes: [{ type: Number }],
  postalCodes: Array,
  dairats: [{
    code: Number,
    name: String,
    nameAr: String,
    nameEn: String,
    baladyiats: [{
      code: Number,
      name: String,
      nameAr: String,
      nameEn: String,
    }],
  }],
  // TODO: Edit flush-db scripts and controllers
  // adjacentWilayas: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Wilaya',
  // }],
  adjacentWilayas: [{
    type: Number,
  }],
});

const Wilaya = mongoose.model('Wilaya', WilayaSchema);

module.exports = Wilaya;

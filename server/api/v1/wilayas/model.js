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
    type: Schema.Types.ObjectId,
    ref: 'Daira',
  }],
  adjacentWilayas: [{
    type: Schema.Types.ObjectId,
    ref: 'Wilaya',
  }],
}, {
  timestamps: true,
});

const Wilaya = mongoose.model('Wilaya', WilayaSchema);

module.exports = Wilaya;

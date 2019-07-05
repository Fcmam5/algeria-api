const mongoose = require('mongoose');

const { Schema } = mongoose;

const WilayaSchema = new Schema({
  _id: {
    type: Number,
    unique: true,
    required: true,
  },
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

WilayaSchema.methods = {
  toJSON() {
    return {
      matricule: this.id,
      name: this.name,
      nameEn: this.nameEn,
      nameAr: this.nameAr,
      phoneCodes: this.phoneCodes,
      postalCodes: this.postalCodes,
    };
  },
};

const Wilaya = mongoose.model('Wilaya', WilayaSchema);

module.exports = Wilaya;

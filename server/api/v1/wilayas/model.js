const mongoose = require('mongoose');

const { Schema } = mongoose;

const WilayaSchema = new Schema({
  matricule: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  nameAr: String,
  nameFr: String,
  phoneCodes: [{ type: Number }],
  postalCodes: [{
    ets: String,
    code: Number,
  }],
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
      matricule: this.matricule,
      name: this.name,
      nameAr: this.nameAr,
      nameEn: this.nameFr,
      phoneCodes: this.phoneCodes,
      postalCodes: this.postalCodes,
    };
  },
};

const Wilaya = mongoose.model('Wilaya', WilayaSchema);

module.exports = Wilaya;

const mongoose = require('mongoose');

const { Schema } = mongoose;

const BaladyiaSchema = new Schema({
  code: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  nameAr: {
    type: String,
    required: true,
  },
  nameEn: {
    type: String,
    required: true,
  },
});

BaladyiaSchema.methods = {
  toJSON() {
    return {
      id: this.id,
      code: this.code,
      name: this.name,
      nameAr: this.nameAr,
      nameEn: this.nameEn,
    };
  },
};
const Baladyia = mongoose.model('Baladyia', BaladyiaSchema);

module.exports = Baladyia;

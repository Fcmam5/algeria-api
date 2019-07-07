const mongoose = require('mongoose');

const { Schema } = mongoose;

const DairaSchema = new Schema({
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  nameAr: {
    type: String,
  },
  nameEn: {
    type: String,
  },
  baladyiats: [{
    type: Schema.Types.ObjectId,
    ref: 'Baladyia',
  }],
});

DairaSchema.methods = {
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
const Daira = mongoose.model('Daira', DairaSchema);
module.exports = Daira;

const mongoose = require('mongoose');

const { Schema } = mongoose;

const DairaSchema = new Schema({
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  name: String,
  nameAr: String,
  nameEn: String,
  baladyiats: [{
    type: Schema.Types.ObjectId,
    ref: 'Baladyia',
  }],
});

DairaSchema.methods = {
  toJSON() {
    return {
      code: this.code,
      name: this.name,
      nameAr: this.nameAr,
      baladyiats: this.baladyiats,
      id: this.id,
    };
  },
};
const Daira = mongoose.model('Daira', DairaSchema);
module.exports = Daira;

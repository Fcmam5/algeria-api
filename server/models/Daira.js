const mongoose = require('mongoose');

const { Schema } = mongoose;

const DairaSchema = new Schema({
  code: Number,
  name: String,
  nameAr: String,
  nameEn: String,
  baladyiats: [{
    type: Schema.Types.ObjectId,
    ref: 'Baladyia',
  }],
});

const Daira = mongoose.model('Daira', DairaSchema);

module.exports = Daira;

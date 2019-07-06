const mongoose = require('mongoose');

const { Schema } = mongoose;

const BaladyiaSchema = new Schema({
  code: Number,
  name: String,
  nameAr: String,
  nameEn: String,
});

const Baladyia = mongoose.model('Baladyia', BaladyiaSchema);

module.exports = Baladyia;

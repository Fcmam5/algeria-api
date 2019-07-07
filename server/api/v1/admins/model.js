const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const { isEmail } = require('validator');
const { adminRole } = require('../../../services/acl/constants');

const { Schema, model } = mongoose;
const ROUNDS = 12;
const schema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    validate: isEmail,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: Number,
    required: true,
    enum: [adminRole],
  },
}, {
  timestamps: true,
});
schema.pre('save', function hashPassword(next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hash(this.password, ROUNDS, (err, hash) => {
      if (err) throw err;
      this.password = hash;
      next();
    });
  }
});
schema.methods = {
  toJSON() {
    return {
      id: this.id,
      email: this.email,
    };
  },
};
const Admin = model('admin', schema);
// new Admin({
//   email: 'akram@esi.dz',
//   password: 'root',
//   role: 0,
// }).save().then(console.log).catch(console.error);
module.exports = Admin;

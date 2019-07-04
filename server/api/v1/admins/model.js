const mongoose = require('mongoose');
const { isEmail } = require('validator');
const { adminRole } = require('../../../services/acl/constants');

const { Schema, model } = mongoose;

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
    min: 6,
    max: 256,
  },
  role: {
    type: Number,
    required: true,
    enum: [adminRole],
  },
}, {
  timestamps: true,
});

const Admin = model('admin', schema);

module.exports = Admin;

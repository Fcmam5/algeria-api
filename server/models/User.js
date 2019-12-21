const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
}, {
  timestamps: true,
});

// eslint-disable-next-line consistent-return
UserSchema.pre('save', async (next) => {
  const user = this;

  if (!user.isModified('password')) return next();

  try {
    // hash the password and override the cleartext password with the hashed one
    const hash = await bcrypt.hash(user.password, 10);

    user.password = hash;
    return next();
  } catch (err) {
    if (err) return next(err);
  }
});

UserSchema.methods.comparePassword = candidatePwd => bcrypt.compare(candidatePwd, this.password);

const User = mongoose.model('User', UserSchema);

module.exports = User;

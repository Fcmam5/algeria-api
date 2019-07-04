const jsonwebtoken = require('jsonwebtoken');

const signOptions = {
  expiresIn: '1d',
};
const verifyOptions = {
  ignoreExpiration: true,
};
const sign = (payload, options = signOptions) => new Promise(
  (resolve, reject) => {
    jsonwebtoken.sign(
      payload,
      process.env.JWT_SECRET,
      options,
      (err, token) => {
        if (err) return reject(err);
        return resolve(token);
      },
    );
  },
);
const verify = (token, options = verifyOptions) => new Promise(
  (resolve, reject) => {
    jsonwebtoken.verify(
      token,
      process.env.JWT_SECRET,
      options,
      (err, decoded) => {
        if (err) return reject(err);
        return resolve(decoded);
      },
    );
  },
);

module.exports = { sign, verify };

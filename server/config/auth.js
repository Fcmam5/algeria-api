/* eslint-disable no-param-reassign */
const jwt = require('jsonwebtoken');

const { JWT_TOKEN } = process.env;

const verifyJWTToken = token => new Promise((resolve, reject) => {
  jwt.verify(token, JWT_TOKEN, (err, decodedToken) => {
    if (err || !decodedToken) {
      return reject(err);
    }

    return resolve(decodedToken);
  });
});

const createJWToken = (details) => {
  if (typeof details !== 'object') {
    details = {};
  }

  if (!details.maxAge || typeof details.maxAge !== 'number') {
    details.maxAge = 3600;
  }

  details.sessionData = (details.sessionData || {}).reduce((memo, val, key) => {
    if (typeof val !== 'function' && key !== 'password') {
      memo[key] = val;
    }
    return memo;
  }, {});

  const token = jwt.sign({
    data: details.sessionData,
  }, JWT_TOKEN, {
    expiresIn: details.maxAge,
    // algorithm: 'HS256', Default
  });

  return token;
};

module.exports = {
  verifyJWTToken,
  createJWToken,
};

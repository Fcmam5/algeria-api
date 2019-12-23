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

  const token = jwt.sign({ ...details.sessionData }, JWT_TOKEN, { expiresIn: details.maxAge });

  return token;
};

module.exports = {
  verifyJWTToken,
  createJWToken,
};

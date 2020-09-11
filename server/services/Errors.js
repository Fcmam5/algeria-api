/* eslint-disable max-classes-per-file */

class EmailIsTakenError extends Error {
  constructor(message = 'Email Address is Already taken') {
    super(message);
    this.name = 'EmailIsTakenError';
  }
}

class BadLoginCredentials extends Error {
  constructor(message = 'Cannot login with the provided credentials') {
    super(message);
    this.name = 'BadLoginCredentials';
  }
}

module.exports = {
  EmailIsTakenError,
  BadLoginCredentials,
};

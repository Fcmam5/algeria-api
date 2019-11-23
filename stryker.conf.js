// eslint-disable-next-line func-names
module.exports = function (config) {
  config.set({
    mutator: 'javascript',
    packageManager: 'yarn',
    mutate: [
      'server/**/*.js',
    ],
    reporters: ['clear-text', 'progress', 'dashboard'],
    testRunner: 'jest',
    transpilers: [],
    coverageAnalysis: 'off',
  });
};

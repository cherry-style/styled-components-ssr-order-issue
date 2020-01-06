const modify = require('./customWebpackConfig');

module.exports = {
  plugins: [{ name: 'typescript', options: { useBabel: true } }],
  modify,
};

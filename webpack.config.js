const path = require('path');

module.exports = {
  entry: {
    index: './src/app.js',
    'service-worker': './src/service-worker.js'
  },
  output: {
    path: 'build',
    filename: '[name].js'
  },
  devtool: 'inline-source-map'
};
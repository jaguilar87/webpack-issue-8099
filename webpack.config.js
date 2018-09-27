const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    a: path.resolve(__dirname, 'src', 'a.js'),
    b: path.resolve(__dirname, 'src', 'b.js'),
  },
  output: {
    jsonpFunction: `webpackJsonp__[name]`,
    library: ['globalVariable', '[name]'],
    filename: `[name]--[chunkhash].js`,
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
};

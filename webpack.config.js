const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
      index: './src/index.js',
      print: './src/print.js',
      another: './src/another-module.js',
  },
  plugins: [
      new HtmlWebpackPlugin({
          title: 'Output Management',
      }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  }
};
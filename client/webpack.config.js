const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src'],
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'react',
            [
              'es2015', { 'modules': false }
            ]
          ],
        }
      },
      {
        test: /\.(scss|css)$/,
        loaders: ['style-loader', 'css-loader'],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  watch: false,
  performance: {
    hints: false
  }
};
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var packagejson = require('../package.json');

module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, '../src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: path.resolve(__dirname, '../src')
      }, {
        test: /\.scss$/, // Only .scss files
        loader: 'style!css!autoprefixer?browsers=last 2 version!sass'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      inject: 'body', // Inject webpack scripts into the body.
      hash: true
    }),
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(packagejson.version)
    })
  ],

  resolve: {
    root: path.resolve(__dirname, '../src')
  }
};

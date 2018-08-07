'use strict';

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './src/client/App.jsx'
  ],
  output: {
    path: path.join(__dirname + '/dist/client'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins : [
    new CopyWebpackPlugin([
        {from: 'src/assets', to: 'assets'}
    ])
  ]
}

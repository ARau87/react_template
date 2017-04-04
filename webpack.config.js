'use strict';

const path = require('path');

module.exports = {
  entry: [
    './src/client/App.jsx'
  ],
  output: {
    path: path.join(__dirname + '/dist/client'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

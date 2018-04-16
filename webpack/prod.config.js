const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./base.config.js');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = merge(baseConfig, {
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: 'image-webpack-loader',
        enforce: 'pre'
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: true,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new WorkboxPlugin({
      globDirectory: './build/',
      globPatterns: ['**/*.{html,js,css}'],
      swDest: './build/service-worker.js'
    })
  ],

});

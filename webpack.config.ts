const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const GoogleFontsPlugin = require("google-fonts-webpack-plugin")
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: 'viacoin.js',
  module: {
    rules: [
      {
        test: /\.js?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.(s*)css|sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader',
            {
              loader: 'sass-resources-loader',
              options: {
                resources: './src/vars.sass'
              }
            }
          ]
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]-[md5:hash].[ext]'
          }
        }
      }
    ]
  },
  resolve: {
    modules: ['./node_modules', './src'],
    extensions: [ '.js', '.css' ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Viacoin',
      template: './src/template.html',
    }),
    new webpack.NamedModulesPlugin(),
    new GoogleFontsPlugin({
      fonts: [
        { family: "Montserrat", variants: ["300", "400", "600", "900"] },
        { family: "Roboto", variants: ["400", "600", "700"] }
      ]
    }),
    new ExtractTextPlugin('viacoin.bundle.css', { allChunks: true}),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port:  '3000',
        proxy:  'http://localhost:3000'
      },
      {
        reload: false
      }
    ),
  ],
  externals: {
    'Config': JSON.stringify(require('./config.json'))
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
};

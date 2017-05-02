var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./data')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('[name].css');
module.exports = {
  entry: './entry.js',

  output: {
    filename: 'bundle.js',
    path: __dirname,
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  devServer: { inline: false},
  module: {
    loaders: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2016', 'react']
        }
      },
      { 
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2016', 'react']
        }
      },
      {
        test: /\.scss/,
        use: extractCSS.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?sourceMap!sass-loader?sourceMap',
        })
      }

    ]
  },
  stats: {
    errorDetails: true
  },
  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, data),
    extractCSS
  ]
}

'use strict';

var webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path'),
  srcPath = path.join(__dirname, 'src'),
  ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  target: 'web',
  cache: true,
  entry: {
    app: path.join(srcPath, 'app.js'),
    common: ['react', 'react-dom', 'react-router', 'history', 'alt']
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    library: ['Example', '[name]'],
    pathInfo: true
  },
  module: {
    loaders: [
      // {test: /\.css|\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader')},
      {test: /\.css|\.scss$/, loader: 'style!css!sass'},
      {test: /\.js$|\.jsx$/, exclude: /node_modules/, loader: 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react'}
    ]
  },
  plugins: [
    // new ExtractTextPlugin("styles.css"),
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html'
    }),
    new webpack.NoErrorsPlugin()
  ],
  debug: true,
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: './build',
    historyApiFallback: true
  }
};

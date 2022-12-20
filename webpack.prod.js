const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack");

module.exports = {
  entry: "./public/index.html",
  mode: "production",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
    publicPath: "/",
  },
  module: {
    rules:[
      {
        test: /\.(bs\.js)$/,
        exclude: [
          __dirname + './lib/bs',
          __dirname + './node_modules',
          __dirname + './src'
        ],
        use: "babel-loader"
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ], 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
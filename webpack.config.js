const path = require("path");
const webpack = require("webpack");

module.exports = {
  // entry: "./public/index.html",
  // mode: "production",
  // output: {
  //   filename: "bundle.js",
  //   path: path.resolve("dist"),
  //   publicPath: "/",
  // },
  // module: {
  //   rules:[
  //     {
  //       test: /\.(bs\.js)$/,
  //       exclude: [
  //         __dirname + './lib/bs',
  //         __dirname + './node_modules',
  //         __dirname + './src'
  //       ],
  //       use: "babel-loader"
  //     },
  //     {
  //       test: /\.html$/i,
  //       loader: "html-loader",
  //     },
  //   ], 
  // },
  entry: "./lib/es6/src/index.bs.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve("public"),
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
}
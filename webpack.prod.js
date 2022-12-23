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
    umdNamedDefine: true,
    libraryTarget: 'umd', 

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
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: [
          __dirname + './src'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ], 
  },
  resolve: {      
    alias: {          
        'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),      
    }  
  },  
  externals: {          
    react: {          
        commonjs: "react",          
        commonjs2: "react",          
        amd: "React",          
        root: "React"      
    },      
    "react-dom": {          
        commonjs: "react-dom",          
        commonjs2: "react-dom",          
        amd: "ReactDOM",          
        root: "ReactDOM"      
    }  
  } 
}
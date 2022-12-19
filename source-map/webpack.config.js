/*
 * @Author: yannis cyu
 * @Date: 2022-12-18 18:53:38
 * @LastEditors: yannis
 * @LastEditTime: 2022-12-18 19:16:41
 * @Description: 请填写简介
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './app.js',

  output: {
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  devtool: 'cheap-module-source-map',

  plugins: [new HtmlWebpackPlugin()]
}

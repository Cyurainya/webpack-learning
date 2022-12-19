/*
 * @Author: yannis cyu
 * @Date: 2022-12-19 21:37:24
 * @LastEditors: yannis
 * @LastEditTime: 2022-12-19 21:51:24
 * @Description: 请填写简介
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode:'production',
  // mode:'development',
  entry:'./src/app.js',
  // devtool:'inline-source-map',

  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },

  optimization:{
    usedExports: true
  },

  plugins:[
    new HtmlWebpackPlugin()
  ]
}
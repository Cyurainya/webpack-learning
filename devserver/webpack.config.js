/*
 * @Author: yannis cyu
 * @Date: 2022-12-18 19:19:04
 * @LastEditors: yannis
 * @LastEditTime: 2022-12-18 19:29:53
 * @Description: 请填写简介
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode:'development',
  entry:'./app.js',
  devServer:{
    static:path.resolve(__dirname,'./dist'),
    compress: true,
    port: 3000,

    headers:{
      'X-Access-Token':'123456'
    },
    historyApiFallback:true,
    proxy:{
      'api':'http:localhost:9000'
    },

    https:true
  },
  plugins:[
    new HtmlWebpackPlugin()
  ]
}
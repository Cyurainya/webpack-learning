/*
 * @Author: yannis cyu
 * @Date: 2022-12-19 21:58:10
 * @LastEditors: yannis
 * @LastEditTime: 2022-12-19 22:24:20
 * @Description: 请填写简介
 */

const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index',

  devServer: {
    devMiddleware: {
      writeToDist: true
    }
  },

  plugins: [
    new HtmlWebpackPlugin(),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ]
}

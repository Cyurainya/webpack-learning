/*
 * @Author: yannis cyu
 * @Date: 2022-12-17 16:11:32
 * @LastEditors: yannis
 * @LastEditTime: 2022-12-18 17:59:23
 * @Description: 请填写简介
 */
const path = require('path')
module.exports = {
  mode: 'development',

  output: {
    filename: 'scripts/[name].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, '../dist'),
  }
}

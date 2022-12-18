/*
 * @Author: yannis cyu
 * @Date: 2022-12-18 17:12:36
 * @LastEditors: yannis
 * @LastEditTime: 2022-12-18 17:44:29
 * @Description: 请填写简介
 */
/*
 * @Author: yannis cyu
 * @Date: 2022-12-17 16:11:32
 * @LastEditors: yannis
 * @LastEditTime: 2022-12-18 17:11:40
 * @Description: 请填写简介
 */
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'production',
  output: {
    filename: 'scripts/[name].[contenthash].js',
    publicPath: 'http://localhost:8080/'
  },
  // devtool: 'inline-source-map',

  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()]
  },
  performance: {
    hints: false
  }
}

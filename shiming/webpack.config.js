/*
 * @Author: yannis cyu
 * @Date: 2022-12-18 18:53:38
 * @LastEditors: yannis
 * @LastEditTime: 2022-12-19 23:50:11
 * @Description: 请填写简介
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  mode: 'development',
  entry: './src/index.js',

  module: {
    rules: [
      { test: require.resolve('./src/index.js'), use: 'imports-loader?wrapper=window' },
      {
        test: require.resolve('./src/globals.js'),
        use: 'exports-loader?type=commonjs$exports=file, multiple|helpers.parse|parse'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.ProvidePlugin({
      _: 'lodash'
    })
  ]
}

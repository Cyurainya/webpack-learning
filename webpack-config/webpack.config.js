/*
 * @Author: yannis cyu
 * @Date: 2022-12-18 17:24:15
 * @LastEditors: yannis
 * @LastEditTime: 2022-12-18 17:33:55
 * @Description: 请填写简介
 */

const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config.common')
const productionConfig = require('./webpack.config.prod')
const developmentConfig = require('./webpack.config.dev')

module.exports = (env) => {

  switch (true) {
    case env.development:
      return merge([commonConfig, developmentConfig])

    case env.production: {
      return merge([commonConfig, productionConfig])
    }

    default:
      return new Error('No matching environment')
  }
}

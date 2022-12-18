/*
 * @Author: yannis cyu
 * @Date: 2022-12-18 17:12:36
 * @LastEditors: yannis
 * @LastEditTime: 2022-12-18 17:13:58
 * @Description: 请填写简介
 */
/*
 * @Author: yannis cyu
 * @Date: 2022-12-17 16:11:32
 * @LastEditors: yannis
 * @LastEditTime: 2022-12-18 17:11:40
 * @Description: 请填写简介
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode:  'production',
  entry: {
    index: './src/index.js',
    another: './src/another-module.js'
  },
  output: {
    filename: 'scripts/[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    asyncChunks: true,
    assetModuleFilename: 'images/[contenthash][ext]',
    publicPath:'http://localhost:8080/'
  },
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jpg$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[contenthash][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 * 1024
          }
        }
      },
      {
        test: /\.svg$/,
        type: 'asset/inline'
      },
      {
        test: /\.txt$/,
        type: 'asset/resource'
      },
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [['@babel/plugin-transform-runtime']]
          }
        }
      }
    ]
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack5学习',
      template: './public/index.html',
      filename: 'app.html',
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[contenthash].css'
    })
  ],
  // devServer: {
  //   static: './dist'
  // }
}
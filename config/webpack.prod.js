/** @format */

const { merge } = require('webpack-merge')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const webpackBaseConfig = require('./webpack.base')

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          compress: {
            drop_console: true
          }
        },
        cache: true,
        parallel: true,
        sourceMap: true
      })
    ],
    chunkIds: 'named',
    moduleIds: 'hashed',
    splitChunks: {
      name: false,
      chunks: 'all',
      minChunks: 1,
      // maxAsyncRequests: 5,
      // maxInitialRequests: 5,
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendors',
          chunks: 'initial'
        },
        antd: {
          test: /antd?/,
          name: 'antd',
          priority: 10,
          chunks: 'initial'
        },
        quill: {
          test: /quill?/,
          name: 'quill',
          priority: 10,
          chunks: 'initial'
        },
        react: {
          test: /react|react-dom|mobx|prop-type/,
          name: 'react',
          priority: 10,
          chunks: 'initial'
        }
      }
    },
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash].css',
      chunkFilename: 'assets/css/[name].[contenthash].css'
    })
  ]
})

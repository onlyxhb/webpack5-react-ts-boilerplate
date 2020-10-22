/** @format */

const { merge } = require('webpack-merge')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

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
          },
          cache: true,
          sourceMap: true
        },
        parallel: true
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
          name: 'vendor',
          chunks: 'all',
          enforce: true
        },
        antd: {
          test: /antd?/,
          name: 'antd',
          priority: 10,
          chunks: 'initial',
          enforce: true
        },
        react: {
          test: /react|react-dom|mobx|prop-type/,
          name: 'react',
          priority: 10,
          chunks: 'initial',
          enforce: true
        }
      }
    },
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash].css',
      chunkFilename: 'assets/css/[name].[contenthash].css'
    })
    // new BundleAnalyzerPlugin()
  ]
})
